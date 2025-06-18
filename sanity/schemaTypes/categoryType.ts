import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  // 👇 THÊM CẤU HÌNH SẮP XẾP TẠI ĐÂY
  orderings: [
    {
      title: "Manual Order", // Tên của tùy chọn sắp xếp
      name: "manualOrder",
      by: [{ field: "orderRank", direction: "asc" }], // Sắp xếp theo trường 'orderRank' tăng dần
    },
    {
      title: "Alphabetical",
      name: "alphabeticalOrder",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(), // Nên có validation
    }),
    // 👇 THÊM TRƯỜNG "THỨ TỰ" MỚI
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "number",
      description:
        "A number to manually order the categories. Lower numbers appear first.",
      validation: (Rule) => Rule.required().integer().positive(), // Bắt buộc nhập, phải là số nguyên dương
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "subCategories",
      title: "Sub-Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
          options: {
            // Lọc để không cho phép chọn chính nó làm sub-category
            filter: ({ document }) => {
              const existingSubCategories = (document.subCategories as any[])
                ?.map((sub) => sub._ref)
                .filter(Boolean);

              return {
                filter: "_id != $id && !(_id in $existingSubCategories)",
                params: {
                  id: document._id,
                  existingSubCategories: existingSubCategories || [],
                },
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});
