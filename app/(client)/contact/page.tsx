"use client";

import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

// Import các icon cần thiết
import { Mail, Phone, MapPin, Building } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50/50">
      <Container className="py-16 md:py-24">
        {/* --- Phần tiêu đề của trang --- */}

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Chúng tôi luôn sẵn lòng lắng nghe bạn. Vui lòng điền vào biểu mẫu
            bên dưới hoặc sử dụng thông tin liên hệ trực tiếp.
          </p>
        </div>

        {/* --- Bảng nội dung chính --- */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* --- Cột bên trái: Thông tin liên hệ --- */}
            <div className="p-8 md:p-12 bg-orange-400 text-white">
              <h2 className="text-2xl font-bold mb-2">Thông tin liên hệ</h2>
              <p className="mb-8 opacity-90">
                Bạn cũng có thể liên hệ với chúng tôi qua các kênh sau:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Điện thoại</h3>
                    <a
                      href="tel:+84123456789"
                      className="opacity-90 hover:opacity-100 transition"
                    >
                      0912345678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:contact@yourcompany.com"
                      className="opacity-90 hover:opacity-100 transition"
                    >
                      info@dichvutincay.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Địa chỉ</h3>
                    <p className="opacity-90">
                      Tầng 4, 6/95 Phố Chùa Bộc, Phường Trung Liệt, Quận Đống
                      Đa, Hà Nội
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Giờ làm việc</h3>
                    <p className="opacity-90">
                      Thứ Hai - Thứ Sáu: 8:00 - 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Cột bên phải: Form liên hệ --- */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Họ và Tên
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="bạn@email.com"
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  {/* Sửa lại label cho đúng */}
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nội dung tin nhắn
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Nội dung bạn muốn trao đổi..."
                    className="w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
