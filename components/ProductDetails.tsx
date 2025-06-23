import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  images?: SanityImageSource[];
  intro?: string;
  price: number;
  discount?: number;
  status?: string;
  description?: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        {product.images && product.images[0] && (
          <Image
            src={urlFor(product.images[0]).url()}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {product.status && (
          <div className="mb-2 inline-block px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
            {product.status}
          </div>
        )}
        <div className="mb-2 text-xl text-red-600 font-semibold">
          {product.discount && product.discount > 0 ? (
            <>
              {(product.price - product.discount).toLocaleString("vi-VN")}đ
              <span className="text-gray-400 line-through ml-2">
                {product.price.toLocaleString("vi-VN")}đ
              </span>
            </>
          ) : (
            product.price.toLocaleString("vi-VN") + "đ"
          )}
        </div>
        {product.intro && (
          <div className="mb-4 text-gray-700">{product.intro}</div>
        )}
        {product.description && (
          <div
            className="prose max-w-none mt-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
