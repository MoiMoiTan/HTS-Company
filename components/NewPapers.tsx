import React from "react";
import { Calendar, User } from "lucide-react";
import { newsData, NewsItem, ContentBlock } from "@/constants/newData";
import Image from "next/image";

interface NewPapersProps {
  newsId?: string; // Prop để nhận ID bài viết
}

// Component này sẽ là khung cho một bài viết chi tiết
const NewPapers = ({ newsId }: NewPapersProps) => {
  // Tìm bài viết theo newsId, nếu không có thì lấy bài đầu tiên
  const newsItem: NewsItem | undefined = newsId
    ? newsData.find((item: NewsItem) => item.id === newsId)
    : newsData[0];

  if (!newsItem) {
    return (
      <div className="py-16 md:py-24 text-center text-gray-500">
        Không tìm thấy bài viết.
      </div>
    );
  }

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="text-justify">
            {block.text}
          </p>
        );
      case "heading2":
        return <h2 key={index}>{block.text}</h2>;
      case "heading3":
        return <h3 key={index}>{block.text}</h3>;
      case "image":
        return (
          <figure key={index}>
            <Image
              src={block.src}
              alt={block.alt}
              width={800}
              height={450}
              className="rounded-lg shadow-md mx-auto"
            />
            {block.caption && (
              <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      case "blockquote":
        return (
          <blockquote key={index}>
            <p>{block.text}</p>
            {block.author && (
              <footer className="mt-2 font-semibold text-right">
                {block.author}
              </footer>
            )}
          </blockquote>
        );
      case "video":
        return (
          <div key={index} className="aspect-video my-8">
            <iframe
              src={`https://www.youtube.com/embed/${block.src}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* --- TIÊU ĐỀ VÀ THÔNG TIN BÀI VIẾT --- */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 tracking-tight">
            {newsItem.title}
          </h1>
          <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{newsItem.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={newsItem.date}>{newsItem.date}</time>
            </div>
          </div>
        </header>

        {/* --- ẢNH ĐẠI DIỆN --- */}
        <div className="mb-12 text-center">
          <Image
            src={newsItem.imageUrl}
            alt={newsItem.title}
            width={700}
            height={400}
            className="object-cover rounded-2xl shadow-xl mx-auto"
            priority
          />
        </div>

        {/* --- NỘI DUNG CHÍNH --- */}
        <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-gray-800 prose-blockquote:border-orange-400 prose-blockquote:text-gray-700 prose-blockquote:pl-4 prose-blockquote:not-italic">
          {newsItem.content.map(renderContentBlock)}
        </div>
      </div>
    </article>
  );
};

export default NewPapers;
