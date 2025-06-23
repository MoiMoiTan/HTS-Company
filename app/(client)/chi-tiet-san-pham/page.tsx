import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";

async function getProductBySlug(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id, name, slug, images, intro, price, discount, status, description
  }`;
  return await client.fetch(query, { slug });
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const { slug } = await searchParams;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="p-8 text-center text-red-500">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <ProductDetails product={product} />
    </div>
  );
}
