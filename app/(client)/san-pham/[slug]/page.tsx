"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Container from "@/components/Container";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: unknown;
}

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  images: unknown[];
  intro?: string;
  description?: string;
  price: number;
  discount?: number;
  categories: unknown[];
  status?: string;
}

export default function CategoryDetailPage() {
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        // Fetch category
        const categoryQuery = `*[_type == "category" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          description,
          image
        }`;

        const categoryData = await client.fetch(categoryQuery, {
          slug: params.slug,
        });
        setCategory(categoryData);

        if (categoryData && categoryData._id) {
          const productsQuery = `*[_type == "product" && $categoryId in categories[]._ref] {
            _id,
            name,
            slug,
            images,
            intro,
            description,
            price,
            discount,
            categories,
            status
          }`;
          const productsData = await client.fetch(productsQuery, {
            categoryId: categoryData._id,
          });
          setProducts(productsData);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching category and products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchCategoryAndProducts();
    }
  }, [params.slug]);

  if (loading) {
    return <Loading />;
  }

  if (!category) {
    return (
      <Container className="py-12">
        <div className="text-center">Không tìm thấy danh mục sản phẩm</div>
      </Container>
    );
  }

  return (
    <Container className="py-12">
      {/* Category Header */}
      <div className="mb-12">
        <div className="relative h-64 rounded-lg overflow-hidden mb-6">
          {category.image ? (
            <Image
              src={urlFor(category.image as SanityImageSource).url()}
              alt={category.title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
        <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl"
          >
            <div className="relative h-64">
              {product.images && product.images[0] ? (
                <Image
                  src={urlFor(product.images[0]).url()}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                  Không có ảnh
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              {product.intro && (
                <p className="text-gray-500 text-sm mb-1">{product.intro}</p>
              )}
              <div className="flex items-center gap-2">
                {product.discount != null && product.discount > 0 ? (
                  <>
                    <span className="text-red-500 font-bold">
                      {(product.price - product.discount).toLocaleString(
                        "vi-VN"
                      )}
                      đ
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      {product.price != null
                        ? product.price.toLocaleString("vi-VN")
                        : ""}
                      đ
                    </span>
                  </>
                ) : (
                  <span className="font-bold">
                    {product.price != null
                      ? product.price.toLocaleString("vi-VN")
                      : ""}
                    đ
                  </span>
                )}
              </div>

              {product.status && (
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                    {product.status.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Chưa có sản phẩm nào trong danh mục này
        </div>
      )}
    </Container>
  );
}
