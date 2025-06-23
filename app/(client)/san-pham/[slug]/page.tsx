import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRight, ImageIcon } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImageSource;
  intro?: string;
  price: number;
  discount?: number;
  status?: string;
}

interface CategoryData {
  _id: string;
  title: string;
  description: string;
  image?: SanityImageSource;
  products: Product[];
}

async function getCategoryData(slug: string): Promise<CategoryData | null> {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    description,
    image,
    "products": *[_type == "product" && references(^._id)] | order(name asc) {
      _id,
      name,
      slug,
      "mainImage": images[0],
      intro,
      price,
      discount,
      status
    }
  }`;
  const data = await client.fetch<CategoryData>(query, { slug });
  return data;
}

export default async function CategoryDetailPage({ params }: { params: any }) {
  const { slug } = await params;
  const categoryData = await getCategoryData(slug);

  if (!categoryData) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-bold">Không tìm thấy danh mục sản phẩm</h1>
        <Link
          href="/san-pham"
          className="mt-4 inline-block text-orange-500 hover:underline"
        >
          Quay lại danh sách sản phẩm
        </Link>
      </Container>
    );
  }

  const { title, description, image, products } = categoryData;

  return (
    <div className="bg-gray-50/70">
      <Container className="py-16 md:py-24">
        <header className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-12 md:mb-16 bg-gray-300">
          {image ? (
            <Image
              src={urlFor(image).url()}
              alt={title}
              fill
              className="object-cover brightness-50"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg max-w-2xl">{description}</p>
          </div>
        </header>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-8">
            {products.map((product) => (
              <Link
                key={product._id}
                href={`/chi-tiet-san-pham?slug=${product.slug.current}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    {product.mainImage ? (
                      <Image
                        src={urlFor(product.mainImage)
                          .width(300)
                          .height(300)
                          .url()}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12" />
                      </div>
                    )}
                    {product.status && (
                      <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 bg-red-500 text-white rounded-full z-10 shadow-lg">
                        {product.status}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">
                      {product.intro}
                    </p>
                    <div className="flex items-baseline gap-2 mt-2">
                      {product.discount != null && product.discount > 0 ? (
                        <>
                          <span className="text-xl font-bold text-red-600">
                            {(product.price - product.discount).toLocaleString(
                              "vi-VN"
                            )}
                            đ
                          </span>
                          <span className="text-gray-400 line-through text-sm">
                            {product.price.toLocaleString("vi-VN")}đ
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-gray-800">
                          {product.price.toLocaleString("vi-VN")}đ
                        </span>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-orange-500 font-semibold text-sm inline-flex items-center gap-1 w-full justify-center">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            <h2 className="text-xl font-semibold">Chưa có sản phẩm</h2>
            <p className="mt-2">
              Hiện chưa có sản phẩm nào trong danh mục này. Vui lòng quay lại
              sau.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
