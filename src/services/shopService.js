import { brands, categories, products } from "../data/shopData";

// Helper to map product ID to existing uniform image assets in the public directory
export const getProductImage = (productId) => {
  const mapping = {
    prod_ihna_womens_scrub_top: "/Femaletop-2.jpg",
    prod_ihna_womens_scrub_pants: "/Femalebottom.jpg",
    prod_ihna_mens_scrub_top: "/Maletop-2.jpg",
    prod_ihna_mens_scrub_pants: "/Femalebottom.jpg",
    prod_ihna_unisex_polo: "/uniform5.png",
    // prod_ihm_womens_scrub_top: "/Femaletop-2.jpg",
    // prod_ihm_womens_scrub_pants: "/Femalebottom.jpg",
    // prod_ihm_mens_scrub_top: "/Maletop-2.jpg",
    // prod_ihm_mens_scrub_pants: "/Femalebottom.jpg",
  };
  return mapping[productId] || "/uniform1.png";
};

// Simulate network latency (e.g., 300ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch all active brands
 */
export const fetchBrands = async () => {
  await delay(300);
  return brands.filter((brand) => brand.status === "active");
};

/**
 * Fetch active categories - filtered to show only Scrubs categories
 */
export const fetchCategories = async () => {
  await delay(300);
  return categories.filter(
    (category) =>
      category.status === "active" &&
      (category.id === "cat_clothing" || category.id.includes("scrub"))
  );
};

/**
 * Fetch active scrubs products based on filter and sorting criteria
 */
export const fetchProducts = async (filters = {}) => {
  await delay(300);
  // Filter products to keep only scrubs (categoryId starts with cat_*_scrub)
  let result = products.filter(
    (product) =>
      product.status === "active" &&
      product.visibility === "public" &&
      product.categoryId.includes("scrub")
  );

  const { brandId, categoryId, gender, search, sortBy } = filters;

  // Filter by Brand
  if (brandId) {
    result = result.filter((product) => product.brandId === brandId);
  }

  // Filter by Category (includes checking parentCategory hierarchy)
  if (categoryId) {
    // Helper to find all child category IDs recursively
    const getChildCategoryIds = (catId) => {
      const children = categories.filter((cat) => cat.parentId === catId);
      let ids = [catId];
      children.forEach((child) => {
        ids = [...ids, ...getChildCategoryIds(child.id)];
      });
      return ids;
    };

    const allowedCategoryIds = getChildCategoryIds(categoryId);
    result = result.filter((product) =>
      allowedCategoryIds.includes(product.categoryId)
    );
  }

  // Filter by Gender
  if (gender) {
    result = result.filter(
      (product) =>
        product.attributes.gender === gender ||
        product.attributes.gender === "unisex"
    );
  }

  // Filter by Search Query
  if (search) {
    const query = search.toLowerCase().trim();
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(query))) ||
        (product.description.short && product.description.short.toLowerCase().includes(query))
    );
  }

  // Sorting
  if (sortBy) {
    if (sortBy === "price_asc") {
      result.sort((a, b) => a.pricing.price - b.pricing.price);
    } else if (sortBy === "price_desc") {
      result.sort((a, b) => b.pricing.price - a.pricing.price);
    } else if (sortBy === "name_asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  return result;
};

/**
 * Fetch a single product by its slug (only if it is a scrub product)
 */
export const fetchProductBySlug = async (slug) => {
  await delay(300);
  return products.find(
    (product) =>
      product.slug === slug &&
      product.status === "active" &&
      product.visibility === "public" &&
      product.categoryId.includes("scrub")
  );
};

/**
 * Fetch related products from the same brand or category (only scrubs)
 */
export const fetchRelatedProducts = async (productId, brandId, categoryId, limit = 4) => {
  await delay(200);
  return products
    .filter(
      (product) =>
        product.id !== productId &&
        product.status === "active" &&
        product.visibility === "public" &&
        product.categoryId.includes("scrub") &&
        (product.brandId === brandId || product.categoryId === categoryId)
    )
    .slice(0, limit);
};
