import HeroSection from "@/components/HeroSection";
import PopularProducts from "@/components/PopularProducts";
import products from "@/data/products.json";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";

export default function HomePage() {
  const popularProducts = products.slice(0, 3);

  return (
    <main>
      <HeroSection />
        {/* Card Section */}
      <section className="bg-[#0d0b2e] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-2">
            Popular <span className="text-[#ff2d6b]">Products</span>
          </h2>
          <p className="text-gray-400 text-center text-sm mb-10">
            Top picks for this summer season
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <PopularProducts key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <SummerTips />
      <TopBrands/>

    </main>
  );
}