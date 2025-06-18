// Giả sử đây là file: app/faqs/page.tsx

"use client";

import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constants"; // Giả sử bạn có dữ liệu câu hỏi trong file này
import React from "react";
import Link from "next/link"; // Import Link từ next/link
import { HelpCircle, Mail } from "lucide-react";

const FaqsPage = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      <Container className="py-16 md:py-24">
        {/* --- Phần tiêu đề và giới thiệu --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Các câu hỏi thường gặp
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tìm kiếm câu trả lời cho các câu hỏi phổ biến nhất. Nếu bạn không
            tìm thấy điều mình cần, đừng ngần ngại liên hệ với chúng tôi.
          </p>
        </div>

        {/* --- Phần Accordion --- */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-0"
          >
            {faqsData?.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:border-orange-400 transition-all duration-300"
              >
                <AccordionTrigger className="w-full text-left px-6 py-4 text-base md:text-lg font-semibold text-gray-800 hover:no-underline group-hover:text-orange-500 transition-colors">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base text-gray-600">
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* --- Phần liên hệ hỗ trợ --- */}
        <div className="mt-16 text-center bg-white border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Bạn vẫn còn câu hỏi?
          </h2>
          <p className="mt-2 text-gray-600">
            Nếu bạn không tìm thấy câu trả lời mình cần, hãy liên hệ với đội ngũ
            hỗ trợ của chúng tôi.
          </p>

          {/* --- CẬP NHẬT: Sử dụng Link trực tiếp --- */}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Liên hệ chúng tôi
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FaqsPage;
