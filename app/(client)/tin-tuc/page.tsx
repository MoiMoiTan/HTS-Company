"use client";

import Container from "@/components/Container";
import NewPapers from "@/components/NewPapers";
import NewsListPage from "./danh-sach/page"; // Import trang danh sách tin tức
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Tạo một component con để sử dụng useSearchParams
const NewsContent = () => {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id"); // Lấy ID bài viết từ query parameter 'id'

  return newsId ? <NewPapers newsId={newsId} /> : <NewsListPage />;
};

const Page = () => {
  return (
    <Container>
      <Suspense fallback={<div>Đang tải...</div>}>
        <NewsContent />
      </Suspense>
    </Container>
  );
};

export default Page;
