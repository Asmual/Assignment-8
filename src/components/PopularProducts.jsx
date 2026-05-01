"use client";

import Image from "next/image";
import Link from "next/link";

const PopularProducts = ({ product }) => {
  if (!product) return null;

  const { id, name, price, image, category, rating } = product;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff2d6b]/40 hover:shadow-[0_0_30px_rgba(255,45,107,0.1)] transition-all duration-300">

      <div className="h-52 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition duration-300"

          onError={(e) => {
            console.error(`Error loading image: ${image}`);
          }}
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-[#ff2d6b] font-semibold uppercase tracking-wider mb-1">
          {category}
        </p>

        <h2 className="text-white font-bold text-lg mb-2">{name}</h2>

        <p className="text-yellow-400 text-sm mb-2">⭐ {rating}</p>

        <p className="text-[#ff2d6b] font-black text-xl mb-4">৳{price}</p>

        <div className="flex gap-3">
          <button className="flex-1 bg-[#ff2d6b] text-white py-2.5 rounded-xl font-semibold hover:bg-[#e0255e] transition">
            Add to Cart
          </button>
          <Link
            href={`/products/${id}`}
            className="flex-1 border border-white/20 text-white py-2.5 rounded-xl font-semibold text-center hover:bg-white/5 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;