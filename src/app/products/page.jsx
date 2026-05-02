import products from "@/data/products.json";
import PopularProducts from "@/components/PopularProducts";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f0d3b] py-16 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#ff2d6b] font-semibold uppercase tracking-wider text-sm mb-2">
          Our Collection
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">
          All <span className="text-[#ff2d6b]">Summer</span> Products
        </h1>
        <p className="text-white/40 max-w-xl mx-auto">
          Explore our full range of summer essentials — from sunglasses to beach accessories.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <PopularProducts key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}