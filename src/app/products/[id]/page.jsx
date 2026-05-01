import products from "@/data/products.json";
import ProductDetails from "@/components/ProductDetails";
import ProtectedRoute from "@/components/ProtectedRoute";

export default async function Page({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto py-16 px-6">
        <ProductDetails product={product} />
      </div>
    </ProtectedRoute>
  );
}