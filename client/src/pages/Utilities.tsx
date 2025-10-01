import React, { useState } from "react";
import { MapPin, Calculator, Calendar, ListChecks } from "lucide-react";

// ---------- 1. Bản đồ & Vị trí ----------
const MapUtility = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-8 h-8 text-blue-600" />
        <h2 className="text-xl font-bold text-blue-600">Bản đồ & Vị trí</h2>
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.688238889374!2d106.80207711428707!3d10.83084509228278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c780ee7f1f%3A0x5f7c7e38f91c9e07!2zQ8O0bmcgdmnDqm4gR2lhIHRo4bqtcCBIY2zhuqFuaCBUUC5IQ00!5e0!3m2!1svi!2s!4v1696068900000!5m2!1svi!2s"
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

// ---------- 2. Tính toán khoản vay ----------
// ---------- 2. Tính toán khoản vay ----------
const LoanCalculator = () => {
  const [price, setPrice] = useState<number>(1000000);
  const [percent, setPercent] = useState<number>(30);
  const [years, setYears] = useState<number>(10);
  const [monthly, setMonthly] = useState<number | null>(null);

  // Hàm format số thành "1.000.000"
  const formatNumber = (value: number) => {
    return value.toLocaleString("vi-VN");
  };

  const calculate = () => {
    const loan = (price * percent) / 100;
    const months = years * 12;
    const interestRate = 0.01; // 1%/tháng (giả định)
    const monthlyPay =
      (loan * interestRate) / (1 - Math.pow(1 + interestRate, -months));
    setMonthly(Math.round(monthlyPay));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6" /> Tính toán khoản vay
      </h2>

      <div className="flex flex-col gap-4">
        {/* Giá trị bất động sản */}
        <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Giá trị bất động sản (VNĐ)
  </label>
  <div className="relative">
    <input
      type="text"
      value={price ? formatNumber(price):""}  // 👉 Nếu =0 thì rỗng, placeholder sẽ hiện
      onChange={(e) => {
        const rawValue = e.target.value.replace(/\./g, ""); // bỏ dấu .
        const numericValue = Number(rawValue) || 0;
        setPrice(numericValue);
      }}
      className="w-full border rounded-lg px-3 py-2 pr-14 focus:ring-2 focus:ring-purple-400"
      placeholder="Nhập giá trị"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
      VNĐ
    </span>
  </div>
</div>

        {/* Tỷ lệ vay */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tỷ lệ vay (%)
          </label>
          <div className="relative">
            <input
              type="number"
              value={percent}
              onChange={(e) => setPercent(Number(e.target.value))}
              step={5}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-purple-400"
              placeholder="Ví dụ: 30"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>

        {/* Thời gian vay */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Thời gian vay (năm)
          </label>
          <div className="relative">
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              step={1}
              className="w-full border rounded-lg px-3 py-2 pr-12 focus:ring-2 focus:ring-purple-400"
              placeholder="Ví dụ: 10"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              năm
            </span>
          </div>
        </div>

        {/* Nút tính toán */}
        <button
          onClick={calculate}
          className="w-full bg-purple-600 text-white rounded-lg py-3 font-semibold hover:bg-purple-700 transition"
        >
          Tính toán khoản vay
        </button>

        {monthly && (
          <p className="mt-3 text-green-600 font-semibold text-lg">
            💰 Số tiền trả góp hàng tháng:{" "}
            {monthly.toLocaleString("vi-VN")} VNĐ
          </p>
        )}
      </div>
    </div>
  );
};


// ---------- 3. Đặt lịch hẹn ----------
const BookingForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đã đặt lịch cho ${name} vào ${date} lúc ${time}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-8 h-8 text-red-600" />
        <h2 className="text-xl font-bold text-red-600">Đặt lịch hẹn</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Tên khách hàng"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="bg-red-600 text-white rounded-lg py-2 font-semibold hover:bg-red-700 transition"
        >
          Đặt lịch ngay
        </button>
      </form>
    </div>
  );
};

// ---------- 4. So sánh bất động sản ----------
const CompareEstate = () => {
  const [selected, setSelected] = useState<any[]>([]);
  const estates = [
    { id: 1, name: "Căn hộ A", price: "2 tỷ", area: "70m²" },
    { id: 2, name: "Căn hộ B", price: "2.5 tỷ", area: "80m²" },
    { id: 3, name: "Căn hộ C", price: "3 tỷ", area: "90m²" },
  ];

  const toggleSelect = (estate: any) => {
    if (selected.find((s) => s.id === estate.id)) {
      setSelected(selected.filter((s) => s.id !== estate.id));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, estate]);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition md:col-span-2">
      <div className="flex items-center gap-3 mb-4">
        <ListChecks className="w-8 h-8 text-green-600" />
        <h2 className="text-xl font-bold text-green-600">So sánh bất động sản</h2>
      </div>
      <div className="flex gap-4">
        {estates.map((e) => (
          <div
            key={e.id}
            onClick={() => toggleSelect(e)}
            className={`cursor-pointer p-4 border rounded-lg transition hover:shadow-md ${
              selected.find((s) => s.id === e.id)
                ? "border-green-600 bg-green-50"
                : "border-gray-300"
            }`}
          >
            <p className="font-semibold">{e.name}</p>
            <p className="text-sm text-gray-600">Giá: {e.price}</p>
            <p className="text-sm text-gray-600">Diện tích: {e.area}</p>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="table-auto w-full border mt-2">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border px-2 py-1">Tên</th>
                <th className="border px-2 py-1">Giá</th>
                <th className="border px-2 py-1">Diện tích</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((e) => (
                <tr key={e.id} className="hover:bg-green-50">
                  <td className="border px-2 py-1">{e.name}</td>
                  <td className="border px-2 py-1 text-red-600 font-semibold">
                    {e.price}
                  </td>
                  <td className="border px-2 py-1">{e.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ---------- Layout Trang Tiện Ích ----------
const Utilities: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Tiện Ích Website Bất Động Sản
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MapUtility />
          <LoanCalculator />
          <BookingForm />
          <CompareEstate />
        </div>
      </div>
    </div>
  );
};

export default Utilities;
