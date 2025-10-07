import React, { useState } from "react";
import { MapPin, Calculator, Calendar } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  children,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
};

// 🗺️ CARD 1: BẢN ĐỒ & VỊ TRÍ
const MapUtility = () => (
  <Card
    icon={<MapPin className="w-7 h-7 text-blue-600" />}
    title="Khám phá vị trí – Tiện ích & kết nối xung quanh"
    description="Tìm hiểu vị trí dự án và các tiện ích xung quanh giúp bạn đánh giá môi trường sống thuận tiện và tiềm năng đầu tư."
    imageUrl="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  >
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.688238889374!2d106.80207711428707!3d10.83084509228278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c780ee7f1f%3A0x5f7c7e38f91c9e07!2zQ8O0bmcgdmnDqm4gR2lhIHRo4bqtcCBIY2zhuqFuaCBUUC5IQ00!5e0!3m2!1svi!2s!4v1696068900000!5m2!1svi!2s"
      width="100%"
      height="260"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="rounded-lg"
    />
    <div className="mt-4 text-gray-700 text-sm leading-relaxed">
      <ul className="list-disc list-inside space-y-1">
        <li>Xem bản đồ trực quan với chế độ vệ tinh hoặc tiêu chuẩn.</li>
        <li>Hiển thị tiện ích lân cận: trường học, bệnh viện, chợ, công viên.</li>
        <li>Ước tính thời gian di chuyển đến các điểm quan trọng chỉ trong vài giây.</li>
      </ul>
      <p className="mt-3 italic text-gray-500">
        Ví dụ: Dự án A cách siêu thị 600 m, bệnh viện 1.2 km và trường học 900 m – thuận tiện cho cuộc sống hàng ngày.
      </p>
    </div>
  </Card>
);

// 💰 CARD 2: TÍNH KHOẢN VAY
const LoanCalculator = () => {
  const [price, setPrice] = useState<number>(1000000);
  const [percent, setPercent] = useState<number>(30);
  const [years, setYears] = useState<number>(10);
  const [monthly, setMonthly] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 🧮 Hàm định dạng số tiền có dấu chấm ngăn cách
  const formatCurrency = (num: number) => {
    return num.toLocaleString("vi-VN");
  };

  const parseCurrency = (value: string) => {
    return Number(value.replace(/[^\d]/g, "")) || 0;
  };

  const calculate = () => {
    if (percent <= 0 || years <= 0) {
      alert("Tỷ lệ vay và thời gian vay phải lớn hơn 0!");
      return;
    }

    const loan = (price * percent) / 100;
    const months = years * 12;
    const interestRate = 0.01;
    const monthlyPay =
      (loan * interestRate) / (1 - Math.pow(1 + interestRate, -months));
    setMonthly(Math.round(monthlyPay));
  };

  return (
    <Card
      icon={<Calculator className="w-7 h-7 text-purple-600" />}
      title="Công cụ tính vay – Lên kế choạch tài chính thông minh"
      description="Tính toán nhanh lãi suất, thời gian và khoản trả góp hàng tháng giúp bạn chủ động tài chính khi đầu tư bất động sản."
      imageUrl="home.jpg"
    >
      <div className="space-y-4">
    {/* Giá trị bất động sản */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Giá trị bất động sản
  </label>
  <div className="relative">
    <input
      type="text"
      inputMode="numeric"
      value={formatCurrency(price)}
      onChange={(e) => {
        const val = parseCurrency(e.target.value);
        setPrice(Math.max(0, val));
      }}
      step={100000}
      placeholder={isHovered ? "Ví dụ: 1.000.000" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full border rounded-lg px-3 py-2 pr-14 focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
      VNĐ
    </span>
  </div>
</div>



        {/* Tỷ lệ vay */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tỷ lệ vay
          </label>
          <div className="relative">
            <input
              type="number"
              value={percent}
              min={0}
              step={1}
              onChange={(e) => setPercent(Math.max(0, Number(e.target.value)))}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-purple-400"
              placeholder="Ví dụ: 30"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              %
            </span>
          </div>
        </div>

        {/* Thời gian vay */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Thời gian vay
          </label>
          <div className="relative">
            <input
              type="number"
              value={years}
              min={0}
              step={1}
              onChange={(e) => setYears(Math.max(0, Number(e.target.value)))}
              className="w-full border rounded-lg px-3 py-2 pr-12 focus:ring-2 focus:ring-purple-400"
              placeholder="Ví dụ: 10"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              năm
            </span>
          </div>
        </div>

        {/* Nút tính toán */}
        <button
          onClick={calculate}
          className="w-full bg-purple-600 text-white rounded-lg py-3 font-semibold hover:bg-purple-700 transition"
        >
          Tính ngay
        </button>

        {/* Kết quả */}
        {monthly && (
          <p className="mt-3 text-green-700 font-semibold text-lg">
            💰 Trả góp hàng tháng: {monthly.toLocaleString("vi-VN")} VNĐ
          </p>
        )}
      </div>

      <div className="mt-5 text-gray-700 text-sm leading-relaxed">
        <ul className="list-disc list-inside space-y-1">
          <li>So sánh các phương án vay 5 – 20 năm chỉ với vài cú nhấp chuột.</li>
          <li>Hiển thị tổng lãi phải trả, tổng gốc + lãi để dự trù chi phí.</li>
          <li>Giúp bạn xác định được hạn mức vay phù hợp với thu nhập thực tế.</li>
        </ul>
        <p className="mt-3 italic text-gray-500">
          Ví dụ: Vay 1 tỷ đồng trong 15 năm, lãi suất 8%/năm → trả trung bình
          9,9 triệu/tháng, tổng chi phí khoảng 1,78 tỷ.
        </p>
      </div>
    </Card>
  );
};


// 📅 CARD 3: ĐẶT LỊCH TƯ VẤN
const BookingForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đã đặt lịch cho ${name} vào ${date} lúc ${time}`);
  };

  return (
    <Card
      icon={<Calendar className="w-7 h-7 text-red-600" />}
      title="Đặt lịch tư vấn – Xem nhà & gặp chuyên viên"
      description="Lên lịch hẹn nhanh chóng để được tư vấn trực tiếp, xem nhà mẫu hoặc nhận hỗ trợ từ chuyên viên Homedy."
      imageUrl="work.jpg"
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Tên khách hàng"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white rounded-lg py-3 font-semibold hover:bg-red-700 transition"
        >
          Đặt lịch ngay
        </button>
      </form>

      <div className="mt-5 text-gray-700 text-sm leading-relaxed">
        <ul className="list-disc list-inside space-y-1">
          <li>Chọn hình thức: xem nhà trực tiếp, gọi video hoặc gặp tại văn phòng.</li>
          <li>Nhận xác nhận & nhắc lịch qua email hoặc tin nhắn SMS.</li>
          <li>Dễ dàng thay đổi hoặc hủy lịch hẹn chỉ trong 1 thao tác.</li>
        </ul>
        <p className="mt-3 italic text-gray-500">
          Ví dụ: Bạn đặt lịch tư vấn vào thứ 7 lúc 10h sáng – chuyên viên RealEstate sẽ gửi trước bản đồ và thông tin chi tiết để hỗ trợ bạn tận nơi.
        </p>
      </div>
    </Card>
  );
};

// 🧭 PHẦN CHÍNH
const Utilities: React.FC = () => {
  const [active, setActive] = useState<"map" | "loan" | "booking">("map");

  const renderContent = () => {
    switch (active) {
      case "map":
        return <MapUtility />;
      case "loan":
        return <LoanCalculator />;
      case "booking":
        return <BookingForm />;
      default:
        return null;
    }
  };

  const btnClass = (key: "map" | "loan" | "booking") =>
    `px-5 py-2 rounded-full font-semibold transition ${
      active === key
        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Tiện ích hỗ trợ người mua bất động sản
        </h1>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button className={btnClass("map")} onClick={() => setActive("map")}>
            Bản đồ & Vị trí
          </button>
          <button className={btnClass("loan")} onClick={() => setActive("loan")}>
            Tính khoản vay
          </button>
          <button
            className={btnClass("booking")}
            onClick={() => setActive("booking")}
          >
            Đặt lịch tư vấn
          </button>
        </div>

        <div className="transition-all duration-500">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Utilities;
