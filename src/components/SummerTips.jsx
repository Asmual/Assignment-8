const tips = [
  { id: 1, icon: "🧴", title: "SPF 50+ Daily", desc: "Protect your skin from the intense BD summer sun." },
  { id: 2, icon: "💧", title: "Hydration", desc: "Drink plenty of water and fresh coconut juice." },
  { id: 3, icon: "👕", title: "Pure Cotton", desc: "Stay breathable with high-quality local cotton fabrics." },
  { id: 4, icon: "🕶️", title: "UV Glasses", desc: "Keep your eyes safe from harmful UV radiation." },
];

const SummerTips = () => {
  return (
    <section className="bg-[#0d0b2e] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff2d6b] text-xs font-bold uppercase tracking-[3px] mb-3">
            Summer Essentials
          </p>
          <h2 className="text-white text-4xl font-black">
            Quick <span className="text-[#ff2d6b]">Care</span> Tips
          </h2>
          <div className="w-20 h-1 bg-[#ff2d6b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="relative group p-8 rounded-3xl bg-white/3 border border-white/10 hover:border-[#ff2d6b]/30 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Center Aligned Icon Box */}
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#ff2d6b]/20 transition-all duration-500">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#ff2d6b] transition-colors">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {tip.desc}
              </p>

              {/* Bottom Decorative Animated Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#ff2d6b] group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerTips;









