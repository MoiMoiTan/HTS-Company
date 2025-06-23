"use client";

import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50/50">
      <Container className="max-w-4xl py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Chính sách bảo mật
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sự riêng tư của bạn rất quan trọng đối với chúng tôi.
          </p>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              1. Thu thập thông tin
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
              voluptates consequatur quisquam assumenda vel labore beatae
              dolorum? Minima nulla dolores ipsum ab quisquam cum quod sit a!
              Velit, placeat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              2. Sử dụng thông tin
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
              voluptates consequatur quisquam assumenda vel labore beatae
              dolorum? Minima nulla dolores ipsum ab quisquam cum quod sit a!
              Velit, placeat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              3. Chia sẻ thông tin
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
              voluptates consequatur quisquam assumenda vel labore beatae
              dolorum? Minima nulla dolores ipsum ab quisquam cum quod sit a!
              Velit, placeat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              4. Bảo mật dữ liệu
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
              voluptates consequatur quisquam assumenda vel labore beatae
              dolorum? Minima nulla dolores ipsum ab quisquam cum quod sit a!
              Velit, placeat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              5. Quyền của bạn
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut
              voluptates consequatur quisquam assumenda vel labore beatae
              dolorum? Minima nulla dolores ipsum ab quisquam cum quod sit a!
              Velit, placeat.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
