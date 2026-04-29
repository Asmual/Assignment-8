import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HeroImage from '../../public/images/summer-girl.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-[85vh] bg-[#0d0b2e] overflow-hidden flex items-center">

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-800 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 opacity-25 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        <div className="flex flex-col justify-center z-20 pt-16 lg:pt-0">

          <p className="text-[#ff2d6b] font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
            New Arrival
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] mb-1">
            SUMMER SALE
          </h1>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            <span className="text-[#ff2d6b]">50%</span>
            <span className="text-white"> OFF</span>
          </h1>

          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-pink-500 text-white text-sm font-bold px-7 py-3 rounded-full hover:text-[#ff2d6b] transition-all w-fit"
            >
              HOT DEALS
              <span className="text-[20px] leading-none mb-1">🔥</span>
            </Link>
          </div>

          <p className="text-gray-400 text-md leading-relaxed max-w-xs mb-8">
            In this summer have the latest collection. so what are you waiting
            for guys. Scroll and get the awesome outfits.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="flex items-center gap-3 bg-[#ff2d6b] text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-[#e0255e] transition-all shadow-lg shadow-[#ff2d6b]/30"
            >
              SHOP NOW
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <FiArrowRight className="text-white text-lg" />
              </span>
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 border-2 border-white/40 text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-white hover:text-[#0d0b2e] transition-all"
            >
              EXPLORE PRODUCTS
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-end h-full min-h-[50vh] lg:min-h-0">

          <span className="absolute text-[200px] md:text-[320px] font-black text-white/5 select-none leading-none top-1/2 -translate-y-1/2">
            50
          </span>

          <div className="absolute top-8 left-4 lg:left-8 z-30">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white text-center px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-2xl font-black text-[#ff2d6b]">250+</p>
              <p className="text-[10px] text-gray-300 uppercase font-semibold tracking-wider">New Product</p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-[80px]"></div>

          <div className="relative z-10 w-full flex justify-center lg:justify-center">
            <Image
              src={HeroImage}
              alt="Summer Sale"
              priority
              className="relative z-20 w-[320px] md:w-87.5 lg:w-112.5 xl:w-87.5 h-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {[
          { icon: "f", label: "Facebook" },
          { icon: "t", label: "Twitter" },
          { icon: "in", label: "Instagram" },
        ].map((s, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-full border border-white/15 text-white/40 text-xs font-bold flex items-center justify-center hover:border-[#ff2d6b] hover:text-[#ff2d6b] hover:bg-[#ff2d6b]/5 transition-all"
          >
            {s.icon}
          </button>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;