// lib/sanity.ts

import { createClient } from "next-sanity";
import type { QueryParams } from "@sanity/client";

// Lấy thông tin cấu hình từ biến môi trường
// Bạn cần tạo file .env.local ở thư mục gốc của dự án và điền các giá trị này vào
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-17";
export const useCdn = false; // Đặt là `false` để luôn lấy dữ liệu mới nhất

// Tạo một client để kết nối với Sanity
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

// Hàm tiện ích để lấy dữ liệu từ Sanity
// Hàm này được tối ưu cho Next.js App Router, hỗ trợ caching và revalidation
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    cache: "force-cache", // Tùy chọn cache mặc định
    next: {
      // (Tùy chọn) revalidate: 3600, // Cache dữ liệu trong 1 giờ
      tags, // Gắn thẻ cho request để có thể revalidate theo yêu cầu
    },
  });
}
