/* eslint-disable @next/next/no-img-element */
const ProductDetails = ({ product }) => {
  if (!product) return (
    <div className="min-h-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-4">😕</p>
        <h2 className="text-2xl font-bold text-white mb-2">Product Not Found</h2>
        <p className="text-white/50">The product you are looking for does not exist.</p>
      </div>
    </div>
  );

  const { name, image, price, rating, category, description, brand, stock } = product;

  return (
    <div className="grid md:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-2xl p-8">

      {/* Image */}
      <div className="rounded-xl overflow-hidden border border-white/10">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">

        <p className="text-xs text-[#ff2d6b] font-semibold uppercase tracking-wider mb-2">
          {category} {brand && `• ${brand}`}
        </p>

        <h1 className="text-3xl font-bold text-white mt-2 mb-3">
          {name}
        </h1>

        <p className="text-yellow-400 mb-2">⭐ {rating} / 5</p>

        {stock && (
          <p className="text-green-400 text-sm mb-3">
            ✅ In Stock: {stock} items
          </p>
        )}

        <p className="text-[#ff2d6b] font-black text-3xl mb-4">
          ৳{price}
        </p>

        <p className="text-white/60 mb-6 leading-relaxed">
          {description}
        </p>

        <button className="bg-[#ff2d6b] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e0255e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,45,107,0.4)] w-fit">
          Add To Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;