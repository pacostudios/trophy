import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchProductBySlug, getProductImage, fetchRelatedProducts, fetchCategories, fetchBrands } from "../../services/shopService";

export const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Data states
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(true);

  // Interaction states
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // "description" or "specs"
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" or "error"

  // Fetch product detail on slug change
  useEffect(() => {
    const loadProductData = async () => {
      setLoading(true);
      try {
        const prodData = await fetchProductBySlug(slug);
        if (!prodData) {
          // If product not found, redirect to shop
          navigate("/shop");
          return;
        }
        setProduct(prodData);

        setSelectedSize("");

        // Reset inputs
        setQuantity(1);
        setActiveTab("description");

        // Fetch related products
        const related = await fetchRelatedProducts(
          prodData.id,
          prodData.brandId,
          prodData.categoryId
        );
        setRelatedProducts(related);

        // Fetch Category and Brand names for breadcrumbs and styling
        const [allCats, allBrands] = await Promise.all([
          fetchCategories(),
          fetchBrands(),
        ]);

        const cat = allCats.find((c) => c.id === prodData.categoryId);
        setCategoryName(cat ? cat.name : "Uniforms");

        const brand = allBrands.find((b) => b.id === prodData.brandId);
        setBrandName(brand ? brand.name : "Student Brand");

      } catch (err) {
        console.error("Error loading product detail data", err);
      } finally {
        setLoading(false);
      }
    };

    loadProductData();
  }, [slug, navigate]);

  // Show dynamic toast notification
  const triggerToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  // WhatsApp order handler
  const handleWhatsAppOrder = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || "61420722242";
    const message = `Hi, I would like to order:\n- Product: ${product.name}\n- SKU: ${product.sku}\n- Quantity: ${quantity}\n- Total Price: $${(product.pricing.price * quantity).toFixed(2)} AUD`;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="bg-[#F9FBFC] min-h-screen py-16 flex flex-col items-center justify-center">
        {/* Loading Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A3D62] mb-4"></div>
        <p className="text-gray-500 text-sm font-medium">Loading product details...</p>
      </div>
    );
  }

  if (!product) return null;

  const isIHNA = product.brandId === "brand_ihna";
  const sizeOption = product.options.find((opt) => opt.id === "option_size");

  return (
    <div className="bg-[#F9FBFC] min-h-screen py-8 pb-20 relative">

      {/* ─────────────────────────────────────────────────────────────
          TOAST NOTIFICATION MODAL
          ───────────────────────────────────────────────────────────── */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-fadein max-w-sm w-full">
          <div
            className={`p-4 rounded-xl shadow-lg border flex items-start gap-3 text-sm font-medium transition-all ${toastType === "success"
              ? "bg-emerald-50 border-emerald-100 text-emerald-800"
              : "bg-rose-50 border-rose-100 text-rose-800"
              }`}
          >
            {toastType === "success" ? (
              <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            <div className="flex-1">
              <p className="font-bold">{toastType === "success" ? "Added to Cart" : "Notice"}</p>
              <p className="text-xs opacity-90 mt-0.5">{toastMessage}</p>
            </div>
            <button onClick={() => setToastMessage("")} className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#0A3D62] transition-colors">Home</Link>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/shop" className="hover:text-[#0A3D62] transition-colors">Shop</Link>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-400 truncate max-w-[150px] sm:max-w-none">{categoryName}</span>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#0A3D62] font-semibold truncate max-w-[180px] sm:max-w-none">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left: Product Image */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative w-full aspect-square bg-[#F5F7F8] rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-gray-50">
                <img
                  src={getProductImage(product.id)}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />

                {/* Brand Tag Overlay */}
                <span
                  className={`absolute top-4 left-4 text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full text-white shadow-sm uppercase ${isIHNA ? "bg-[#0A3D62]" : "bg-red-600"
                    }`}
                >
                  {isIHNA ? "IHNA Student" : "IHM Student"}
                </span>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Heading details */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gray-500 font-mono tracking-wider">
                    SKU: {product.sku}
                  </span>
                  <div className="h-3.5 w-px bg-gray-300" />
                  <span className="text-xs font-semibold text-[#0A3D62] bg-[#0A3D62]/10 px-2.5 py-0.5 rounded-full">
                    {brandName}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>

                {/* Price block */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0A3D62]">
                    ${product.pricing.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {product.pricing.currency}
                  </span>
                </div>

                {/* Stock Status Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    In Stock ({product.inventory.quantity} available)
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {product.description.short}
                </p>

                {/* Size selector hidden for the time being */}

                {/* Quantity and Add to Cart Row */}
                <div className="flex flex-wrap gap-4 items-center mb-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center border border-gray-200 rounded-xl h-12 bg-white">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-4 text-gray-500 hover:text-gray-700 font-bold transition-colors text-lg"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-gray-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => Math.min(product.inventory.quantity, q + 1))}
                      className="px-4 text-gray-500 hover:text-gray-700 font-bold transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 min-w-[200px] h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 tracking-wide text-sm border-none cursor-pointer"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.549 4.18 1.595 6.002L.034 24l6.147-1.613c1.767.962 3.753 1.47 5.787 1.472 6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm6.938 17.202c-.282.793-1.396 1.455-1.928 1.554-.48.09-.942.316-3.056-.516-2.528-.996-4.136-3.57-4.262-3.738-.126-.168-1.018-1.354-1.018-2.58 0-1.226.642-1.83.87-2.08.228-.25.5-.312.666-.312s.334.004.478.01c.148.006.348-.056.544.422.2.488.68 1.66.738 1.78.058.12.098.26.018.42-.08.16-.118.26-.238.4-.12.14-.252.312-.36.42-.12.12-.244.25-.104.49.14.24.62 1.022 1.332 1.656.918.816 1.692 1.07 1.932 1.19.24.12.38.1.52-.06.14-.16.6-2.73.6-2.73.08-.34.22-.44.44-.36.22.08 1.4.66 1.4.66.2.1.34.16.48.24.14.08.14.24.14.36 0 .42-.182 1.834-.672 2.682z" />
                    </svg>
                    Buy via WhatsApp
                  </button>
                </div>
              </div>

              {/* Shipping and specs help */}
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-50 text-xs text-gray-500 flex gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>Ready to dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Genuine Apparel</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            DESCRIPTION & SPECIFICATION TABS
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 lg:p-12 shadow-sm mb-12">
          {/* Tab buttons */}
          <div className="flex gap-6 border-b border-gray-100 pb-4 mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`text-sm sm:text-base font-bold pb-2 transition-all relative ${activeTab === "description"
                ? "text-[#0A3D62]"
                : "text-gray-400 hover:text-gray-700"
                }`}
            >
              Description
              {activeTab === "description" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A3D62]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`text-sm sm:text-base font-bold pb-2 transition-all relative ${activeTab === "specs"
                ? "text-[#0A3D62]"
                : "text-gray-400 hover:text-gray-700"
                }`}
            >
              Specifications
              {activeTab === "specs" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A3D62]" />
              )}
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === "description" ? (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900">Student Uniform Description</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {product.description.long}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                This item is a mandatory garment for nursing and health administration training. Designed for extreme durability, professional presentation, and comfortable prolonged wear during clinical placement or laboratory modules. High-quality construction guarantees resilience against multiple laundry and chemical sanitizer cycles.
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <th className="py-3.5 pr-4 font-bold text-gray-900 w-1/3">Garment Type</th>
                    <td className="py-3.5 capitalize">{product.specifications.garmentType.replace("_", " ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-3.5 pr-4 font-bold text-gray-900">Recommended Usage</th>
                    <td className="py-3.5 capitalize">{product.specifications.usage.replace("_", " ")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-3.5 pr-4 font-bold text-gray-900">Target Institution</th>
                    <td className="py-3.5">{product.specifications.institution}</td>
                  </tr>
                  {product.specifications.performance && (
                    <tr className="border-b border-gray-100">
                      <th className="py-3.5 pr-4 font-bold text-gray-900">Performance Fabric</th>
                      <td className="py-3.5">Yes - Quick dry moisture wicking</td>
                    </tr>
                  )}
                  <tr className="border-b border-gray-100">
                    <th className="py-3.5 pr-4 font-bold text-gray-900">Material Composition</th>
                    <td className="py-3.5">{product.attributes.material || "65% Polyester, 35% Cotton Twill Blend"}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-3.5 pr-4 font-bold text-gray-900">Garment Fit Type</th>
                    <td className="py-3.5 capitalize">{product.attributes.fit || "Standard Professional Fit"}</td>
                  </tr>
                  <tr>
                    <th className="py-3.5 pr-4 font-bold text-gray-900">Shipping weight</th>
                    <td className="py-3.5">Approx. 350g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            RELATED PRODUCTS
            ───────────────────────────────────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProd) => {
                const isRelatedIHNA = relatedProd.brandId === "brand_ihna";
                return (
                  <div
                    key={relatedProd.id}
                    className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Wrap */}
                      <div className="relative w-full aspect-square bg-[#F5F7F8] rounded-xl overflow-hidden mb-4 flex items-center justify-center p-6">
                        <img
                          src={getProductImage(relatedProd.id)}
                          alt={relatedProd.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          className={`absolute top-2.5 left-2.5 text-[9px] font-extrabold tracking-wider px-2 py-0.5 rounded-full text-white shadow-sm uppercase ${isRelatedIHNA ? "bg-[#0A3D62]" : "bg-red-600"
                            }`}
                        >
                          {isRelatedIHNA ? "IHNA" : "IHM"}
                        </span>
                      </div>

                      {/* Info */}
                      <p className="text-[10px] text-gray-400 font-mono mb-1">
                        SKU: {relatedProd.sku}
                      </p>
                      <h3 className="text-xs font-bold text-gray-800 line-clamp-2 hover:text-[#0A3D62] transition-colors mb-2 min-h-[32px]">
                        <Link to={`/shop/product/${relatedProd.slug}`}>
                          {relatedProd.name}
                        </Link>
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-gray-50 flex items-center justify-between mt-3">
                      <span className="text-sm font-extrabold text-gray-900">
                        ${relatedProd.pricing.price.toFixed(2)}
                      </span>
                      <Link
                        to={`/shop/product/${relatedProd.slug}`}
                        className="text-xs font-bold text-[#0A3D62] hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
