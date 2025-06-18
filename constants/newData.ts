import new1 from "@/images/News/new1.png";
import { StaticImageData } from "next/image";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "image"; src: string | StaticImageData; alt: string; caption?: string }
  | { type: "blockquote"; text: string; author?: string }
  | { type: "video"; src: string }; 

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string | StaticImageData;
  content: ContentBlock[];
}

export const newsData: NewsItem[] = [
    {
        id: "hts-phan-phoi-dich-vu",
        category: "Chứng nhận",
        title: "HTS Chính Thức Trở Thành Nhà Phân Phối Của Quang Trung CORP, Mở Rộng Hệ Sinh Thái Dịch Vụ",
        author: "Bởi HTS",
        date: "Ngày 6 tháng 6, 2025",
        imageUrl: new1,
        content: [
          {
            type: "paragraph",
            text: "Hà Nội, ngày 6 tháng 6 năm 2025 – Công ty Cổ phần HTS đã chính thức đánh dấu một cột mốc quan trọng trên chặng đường phát triển khi được Công ty Cổ phần Dịch vụ và Công nghệ Số Quang Trung (Quang Trung CORP) chứng nhận là nhà phân phối dịch vụ xác thực và định danh điện tử chính thức. Sự kiện này khẳng định năng lực và uy tín của HTS dù là một doanh nghiệp mới trên thị trường. Đây là bước Tiến Quan Trọng, Khẳng Định Năng Lực",
          },
          {
            type: "paragraph",
            text: "Buổi lễ trao chứng nhận đã diễn ra trong không khí trang trọng tại trụ sở chính của Quang Trung CORP, với sự tham dự của ban lãnh đạo cấp cao hai bên. Việc một công ty công nghệ hàng đầu như Quang Trung CORP lựa chọn HTS làm đối tác phân phối cho thấy sự tin tưởng vào tiềm lực, đội ngũ chuyên môn và tầm nhìn chiến lược mà HTS đang theo đuổi.",
          },
          {
            type: "paragraph",
            text: "Theo thỏa thuận, HTS sẽ là đơn vị phân phối các bộ giải pháp công nghệ lõi của Quang Trung CORP. Điều này cho phép HTS mở rộng đáng kể danh mục sản phẩm, mang đến cho khách hàng một hệ sinh thái dịch vụ số toàn diện hơn.",
          },
          {
            type: "heading3",
            text: "Cam Kết Mang Lại Giá Trị Tốt Nhất cho Khách Hàng",
          },
          {
            type: "paragraph",
            text: "Phát biểu đôi lời, Ông Bùi Đình Thắng, Giám Đốc của HTS, chia sẻ: \"Trở thành nhà phân phối của Quang Trung CORP là một vinh dự, đồng thời cũng là một trách nhiệm lớn lao. Chúng tôi cam kết sẽ không ngừng nỗ lực, đầu tư vào con người và quy trình để đảm bảo mọi khách hàng khi đến với HTS sẽ nhận được không chỉ sản phẩm công nghệ hàng đầu, mà còn cả dịch vụ tư vấn, triển khai và hỗ trợ tận tâm nhất.\"",
          },
          {
            type: "paragraph",
            text: "Sự hợp tác chiến lược này được kỳ vọng sẽ tạo ra một sức mạnh cộng hưởng, giúp cả hai công ty cùng phát triển và mang lại những giá trị vượt trội cho thị trường công nghệ trong nước.",
          },
        ],
    },
    // thêm các bài viết
  ];