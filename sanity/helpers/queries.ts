import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { Slug } from "../../sanity.types";

// --- INTERFACES (Không thay đổi) ---

export interface SubCategoryResult {
  _id: string;
  title?: string;
  slug?: Slug;
  description?: string;
}

export interface CategoryWithSubcategoriesResult {
  _id: string;
  title?: string;
  slug?: Slug;
  description?: string;
  subCategories?: SubCategoryResult[] | null;
}

// --- QUERIES (Sửa lỗi TypeScript cuối cùng) ---

export const getAllCategories = async (): Promise<
  CategoryWithSubcategoriesResult[]
> => {
  const CATEGORIES_QUERY = defineQuery(`
    *[_type == "category" && !defined(parent)] | order(orderRank asc) {
      _id,
      title,
      "slug": slug.current,
      "subCategories": *[_type == "category" && references(^._id)] | order(orderRank asc) {
        _id,
        title,
        "slug": slug.current,
        description
      }
    }
  `);

  try {
    // ✅ SỬA LỖI: Truy cập vào thuộc tính `.data` của kết quả trả về
    const categories = (
      await sanityFetch({
        query: CATEGORIES_QUERY,
        tags: ["category"],
      })
    ).data as CategoryWithSubcategoriesResult[];

    return categories || [];
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};

export const getCategoryBySlug = async (
  slug: string
): Promise<CategoryWithSubcategoriesResult | null> => {
  const CATEGORY_BY_SLUG_QUERY = defineQuery(`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
       "subCategories": *[_type == "category" && references(^._id)] | order(orderRank asc) {
        _id,
        title,
        "slug": slug.current,
        description
      }
    }
  `);

  try {
    // ✅ SỬA LỖI: Truy cập vào thuộc tính `.data` của kết quả trả về
    const category = (
      await sanityFetch({
        query: CATEGORY_BY_SLUG_QUERY,
        params: { slug },
        tags: [`category:${slug}`],
      })
    ).data as CategoryWithSubcategoriesResult | null;

    return category || null;
  } catch (error) {
    console.error("Error fetching category by slug:", error);
    return null;
  }
};
