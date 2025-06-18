// app/[categorySlug]/page.tsx

// QUAN TRỌNG: Phiên bản này đã được đơn giản hóa, không nhận params
// để đảm bảo component render thành công.

export default function CategoryPage() {
  // Chỉ render JSX tĩnh để đảm bảo component là hợp lệ
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Trang Category - Gỡ Lỗi</h1>
      <p className="text-lg text-gray-600">
        Nếu bạn thấy trang này, nghĩa là hệ thống định tuyến (routing) đã hoạt
        động chính xác.
      </p>
      <div className="mt-8 p-4 bg-gray-100 inline-block rounded-md">
        <p>Component đã được render thành công!</p>
      </div>
    </div>
  );
}
