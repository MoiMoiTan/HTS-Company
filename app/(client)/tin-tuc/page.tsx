"use client";

import Container from "@/components/Container";
import NewPapers from "@/components/NewPapers";
import NewsListPage from "./danh-sach/page";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const NewsContent = () => {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

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
