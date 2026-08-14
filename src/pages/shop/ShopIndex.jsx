import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TopBanner } from "../../components/common/TopBanner";
import { fetchProducts, fetchBrands, fetchCategories, getProductImage } from "../../services/shopService";

export const ShopIndex = () => {
  // States for API data
  const [productsList, setProductsList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [sortBy, setSortBy] = useState("name_asc");

  // Mobile filters overlay state
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Load brands and categories once on mount
  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const [brandsData, categoriesData] = await Promise.all([
          fetchBrands(),
          fetchCategories(),
        ]);
        setBrandsList(brandsData);
        // We only want to list category filters that have products or represent primary groupings
        // Filter out the root "Clothing" (parentId null) to keep it simple, or keep the hierarchy.
        const subCats = categoriesData.filter(cat => cat.id !== "cat_clothing");
        setCategoriesList(subCats);
      } catch (err) {
        console.error("Failed to load shop filter metadata", err);
      }
    };
    loadMetadata();
  }, []);

  // Fetch products whenever filters or sort changes
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({
          brandId: selectedBrand,
          categoryId: selectedCategory,
          gender: selectedGender,
          search: searchQuery,
          sortBy: sortBy,
        });
        setProductsList(data);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    };

    // Add a small debounce if typing search
    const delayDebounce = setTimeout(() => {
      loadProducts();
    }, 150);

    return () => clearTimeout(delayDebounce);
  }, [selectedBrand, selectedCategory, selectedGender, searchQuery, sortBy]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedGender("");
    setSearchQuery("");
    setSortBy("name_asc");
  };

  // Icon for Top Banner
  const shopIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );

  return (
    <div className="bg-[#F9FBFC] min-h-screen pb-16">
      {/* Banner */}
      <TopBanner
        image="/shop_image.png"
        icon={shopIcon}
        chip_title="STUDENT STORE"
        title="Student Uniforms & Scrubs"
        description="Official uniform shop for Institute of Health & Nursing Australia (IHNA) and Institute of Health & Management (IHM) students."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">


          <aside className="hidden lg:block w-64 shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 self-start">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-[#0A3D62] hover:underline"
              >
                Reset All
              </button>
            </div>


            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">
                Institution / Brand
              </h3>
              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === ""}
                    onChange={() => setSelectedBrand("")}
                    className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                  />
                  <span>All Institutions</span>
                </label>
                {brandsList.map((brand) => (
                  <label
                    key={brand.id}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand.id}
                      onChange={() => setSelectedBrand(brand.id)}
                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                    />
                    <span>{brand.shortName} - {brand.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">
                Product Category
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                <label className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === ""}
                    onChange={() => setSelectedCategory("")}
                    className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                  />
                  <span>All Categories</span>
                </label>
                {categoriesList.map((category) => {
                  // Indent children based on level for better readability
                  const levelIndent = category.level === 3 ? "pl-4" : category.level === 2 ? "pl-2" : "";
                  return (
                    <label
                      key={category.id}
                      className={`flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer ${levelIndent}`}
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                      />
                      <span className={category.level === 1 ? "font-medium" : ""}>
                        {category.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">
                Gender Fit
              </h3>
              <div className="space-y-2">
                {[
                  { value: "", label: "All Fits" },
                  { value: "women", label: "Women" },
                  { value: "men", label: "Men" },
                  { value: "unisex", label: "Unisex" },
                ].map((genderOption) => (
                  <label
                    key={genderOption.value}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedGender === genderOption.value}
                      onChange={() => setSelectedGender(genderOption.value)}
                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                    />
                    <span>{genderOption.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            {/* Search Bar & Sorting Controls */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
              {/* Search Field */}
              <div className="relative w-full sm:max-w-md">
                <input
                  type="text"
                  placeholder="Search products by name, sku, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-[#0A3D62] text-sm"
                />
                <span className="absolute left-3.5 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
              </div>

              {/* Sort Selector & Mobile Filter Button */}
              <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  <span>Filters</span>
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 hidden sm:inline uppercase tracking-wider">
                    Sort By:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D62] bg-white cursor-pointer"
                  >
                    <option value="name_asc">Name: A-Z</option>
                    <option value="name_desc">Name: Z-A</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-sm text-gray-600 font-medium px-1">
              {!loading && `${productsList.length} products found`}
            </div>

            {/* Products Listing Grid */}
            {loading ? (
              // Skeleton Loader Grid
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm animate-pulse"
                  >
                    <div className="w-full aspect-square bg-gray-200 rounded-xl mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
                    <div className="h-9 bg-gray-200 rounded-lg w-full" />
                  </div>
                ))}
              </div>
            ) : productsList.length === 0 ? (
              // Empty State
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                <svg
                  className="mx-auto h-16 w-16 text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No Products Found
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                  We couldn't find any products matching your current search or filter criteria. Try resetting them.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#0A3D62] text-white font-medium rounded-xl hover:bg-opacity-95 transition-colors text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              // Actual Product Cards
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsList.map((product) => {
                  const isIHNA = product.brandId === "brand_ihna";
                  return (
                    <Link
                      key={product.id}
                      to={`/shop/product/${product.slug}`}
                      className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-inherit hover:no-underline cursor-pointer"
                    >
                      <div>
                        {/* Image Wrap */}
                        <div className="relative w-full aspect-square bg-[#F5F7F8] rounded-xl overflow-hidden mb-4 flex items-center justify-center p-6">
                          <img
                            src={getProductImage(product.id)}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Brand Tag overlay */}
                          <span
                            className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full text-white shadow-sm uppercase ${isIHNA ? "bg-[#0A3D62]" : "bg-red-600"
                              }`}
                          >
                            {isIHNA ? "IHNA Student" : "IHM Student"}
                          </span>
                        </div>

                        {/* Product Meta */}
                        <div className="px-1">
                          <p className="text-xs text-gray-400 font-mono mb-1">
                            SKU: {product.sku}
                          </p>
                          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#0A3D62] transition-colors mb-2 min-h-[40px]">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {/* Pricing and Details Button */}
                      <div className="px-1 pt-3 border-t border-gray-50 flex items-center justify-between mt-auto">
                        <span className="text-base font-extrabold text-gray-900">
                          ${product.pricing.price.toFixed(2)}{" "}
                          <span className="text-[10px] text-gray-400 font-normal">
                            {product.pricing.currency}
                          </span>
                        </span>
                        <span
                          className="px-3.5 py-1.5 bg-gray-50 group-hover:bg-[#0A3D62] text-[#0A3D62] group-hover:text-white rounded-lg text-xs font-semibold tracking-wide transition-all duration-200"
                        >
                          View details
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE SLIDE-OVER FILTERS PANEL
          ───────────────────────────────────────────────────────────── */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop overlay */}
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl animate-fadein">
            <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Reset all button */}
              <button
                onClick={() => {
                  handleResetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-xs"
              >
                Reset All Filters
              </button>

              {/* Brands Filter */}
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Institution
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-sm text-gray-600">
                    <input
                      type="radio"
                      name="brand_mobile"
                      checked={selectedBrand === ""}
                      onChange={() => setSelectedBrand("")}
                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                    />
                    <span>All</span>
                  </label>
                  {brandsList.map((brand) => (
                    <label key={brand.id} className="flex items-center text-sm text-gray-600">
                      <input
                        type="radio"
                        name="brand_mobile"
                        checked={selectedBrand === brand.id}
                        onChange={() => setSelectedBrand(brand.id)}
                        className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                      />
                      <span>{brand.shortName}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-sm text-gray-600">
                    <input
                      type="radio"
                      name="category_mobile"
                      checked={selectedCategory === ""}
                      onChange={() => setSelectedCategory("")}
                      className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                    />
                    <span>All Categories</span>
                  </label>
                  {categoriesList.map((category) => (
                    <label key={category.id} className="flex items-center text-sm text-gray-600">
                      <input
                        type="radio"
                        name="category_mobile"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                      />
                      <span>{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Gender Fit
                </h3>
                <div className="space-y-2">
                  {[
                    { value: "", label: "All Fits" },
                    { value: "women", label: "Women" },
                    { value: "men", label: "Men" },
                    { value: "unisex", label: "Unisex" },
                  ].map((genderOption) => (
                    <label key={genderOption.value} className="flex items-center text-sm text-gray-600">
                      <input
                        type="radio"
                        name="gender_mobile"
                        checked={selectedGender === genderOption.value}
                        onChange={() => setSelectedGender(genderOption.value)}
                        className="w-4 h-4 text-[#0A3D62] border-gray-300 focus:ring-[#0A3D62] mr-3"
                      />
                      <span>{genderOption.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-gray-100">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-[#0A3D62] text-white font-bold rounded-xl text-sm shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
