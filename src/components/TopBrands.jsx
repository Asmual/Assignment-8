/* eslint-disable @next/next/no-img-element */
const brands = [
  { id: 1, name: "Aarong", category: "Fashion & Lifestyle", badge: "Popular", image: "/images/brands/aarong.png" },
  { id: 2, name: "Bata", category: "Footwear", badge: "Top Seller", image: "/images/brands/bata.png" },
  { id: 3, name: "Yellow", category: "Fashion", badge: "Trending", image: "/images/brands/yellow.png" },
  { id: 4, name: "Sailor", category: "Clothing", badge: "New", image: "/images/brands/sailor.png" },
  { id: 5, name: "Apex", category: "Footwear", badge: "Popular", image: "/images/brands/apex.png" },
  { id: 6, name: "Walton", category: "Electronics", badge: "Trusted", image: "/images/brands/walton.png" },
];

const TopBrands = () => {
  return (
    <section className="bg-[#0d0b2e] py-20 px-6 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-[#ff2d6b] text-xs font-bold uppercase tracking-[3px] mb-3 animate__animated animate__fadeIn">
          Our Partners
        </p>
        <h2 className="text-white text-4xl font-black mb-4">
          Trusted <span className="text-[#ff2d6b]">Bangladeshi</span> Brands
        </h2>
        <div className="w-24 h-1 bg-[#ff2d6b] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          We collaborate with the best local brands to bring you the highest quality products.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            // hover:-translate-y-2 সরিয়ে দেওয়া হয়েছে
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#ff2d6b]/10 hover:border-[#ff2d6b]/50 cursor-pointer"
          >
            {/* group-hover:scale-110 সরিয়ে দেওয়া হয়েছে */}
            <div className="w-16 h-16 flex items-center justify-center mb-4 p-2 bg-white/5 rounded-xl transition-transform">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-contain filter brightness-110"
              />
            </div>

            <p className="text-white font-bold text-sm mb-1 group-hover:text-[#ff2d6b] transition-colors">
              {brand.name}
            </p>

            <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-3">
              {brand.category}
            </p>

            <span className="text-[9px] px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 group-hover:bg-[#ff2d6b] group-hover:text-white transition-all">
              {brand.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;