"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRight } from "lucide-react";
import RotatingText from "@/components/RotatingText";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  images?: SanityImageSource[];
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"] | order(title asc) {
          _id, title, description, images, slug
        }`;
        const data = await client.fetch(query);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50/70">
      <Container className="py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Dịch Vụ HTS
          </h1>
          <RotatingText
            texts={[
              "Định danh CCCD",
              "Hợp đồng Điện tử",
              "Hóa đơn Điện tử",
              "Chữ ký số",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-orange-400 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-3xl font-semibold"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các danh mục giải pháp công nghệ toàn diện được thiết kế để
            đáp ứng mọi nhu cầu của doanh nghiệp bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/san-pham/${category.slug.current}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                  {Array.isArray(category.images) && category.images[0] ? (
                    <Image
                      src={urlFor(category.images[0]).url()}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200"></div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                    {category.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-orange-500 font-semibold text-sm inline-flex items-center gap-1">
                      Xem thêm
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
