"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  images?: unknown[];
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"] {
          _id,
          title,
          slug,
          description,
          images
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
    <Container className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Sản phẩm của chúng tôi
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/san-pham/${category.slug.current}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-xl flex flex-col h-full">
              <div className="relative h-64 w-full bg-gray-200">
                {Array.isArray(category.images) && category.images[0] ? (
                  <Image
                    src={urlFor(category.images[0] as SanityImageSource).url()}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
