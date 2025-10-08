import React, { useEffect, useState } from "react";
import axios from "axios";
import type { IEstate } from "../dtos/getEstate";

const API_BASE = "http://localhost:3000/api";

const CreateEstate: React.FC = () => {
  const [estate, setEstate] = useState<IEstate>({
    title: "",
    description: "",
    price: 0,
    address: "",
    ward: { _id: "", name: "", city: { _id: "", name: "" } },
    category: { _id: "", name: "" },
    type: { _id: "", name: "" },
    bedroom: 0,
    bathroom: 0,
    img_urls: [],
    id_user: { id_: "6705ccdf88f123456789abcd" }, // ví dụ
  });

  const [wards, setWards] = useState<
    { _id: string; name: string; city: { _id: string; name: string } }[]
  >([]);
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [types, setTypes] = useState<{ _id: string; name: string }[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);

  // 🟦 Load dữ liệu cho dropdown
  useEffect(() => {
    const loadData = async () => {
      const [wardRes, catRes, typeRes] = await Promise.all([
        axios.get(`${API_BASE}/wards`),
        axios.get(`${API_BASE}/categories`),
        axios.get(`${API_BASE}/types`),
      ]);
      setWards(wardRes.data);
      setCategories(catRes.data);
      setTypes(typeRes.data);
    };
    loadData();
  }, []);

  // 🟦 Xử lý text input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEstate({ ...estate, [e.target.name]: e.target.value });
  };

  // 🟦 Dropdown chọn ward/category/type
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: "ward" | "category" | "type"
  ) => {
    const selectedList =
      key === "ward" ? wards : key === "category" ? categories : types;

    const selected = selectedList.find((item) => item._id === e.target.value);
    if (!selected) return;

    setEstate({ ...estate, [key]: selected as any });
  };

  // 🟦 Chọn nhiều ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  };

  // 🟦 Gửi form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", estate.title);
    formData.append("description", estate.description);
    formData.append("price", estate.price.toString());
    formData.append("address", estate.address);
    formData.append("ward", estate.ward._id);
    formData.append("category", estate.category._id);
    formData.append("type", estate.type._id);
    formData.append("bedroom", estate.bedroom.toString());
    formData.append("bathroom", estate.bathroom.toString());
    formData.append("id_user", estate.id_user.id_);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    try {
      const res = await axios.post(`${API_BASE}/estates`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Tạo estate thành công!");
      console.log(res.data);
    } catch (err) {
      console.error("❌ Upload thất bại:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-4 bg-white p-4 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-2">Tạo Bất Động Sản</h2>

      <input
        name="title"
        placeholder="Tiêu đề"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <textarea
        name="description"
        placeholder="Mô tả"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Giá (VND)"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        name="address"
        placeholder="Địa chỉ"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <div className="grid grid-cols-3 gap-3">
        <select
          onChange={(e) => handleSelectChange(e, "ward")}
          className="border p-2 rounded"
        >
          <option value="">-- Chọn Phường --</option>
          {wards.map((w) => (
            <option key={w._id} value={w._id}>
              {w.name} ({w.city.name})
            </option>
          ))}
        </select>

        <select
          onChange={(e) => handleSelectChange(e, "category")}
          className="border p-2 rounded"
        >
          <option value="">-- Chọn Loại danh mục --</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => handleSelectChange(e, "type")}
          className="border p-2 rounded"
        >
          <option value="">-- Chọn Loại hình --</option>
          {types.map((t) => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          name="bedroom"
          placeholder="Phòng ngủ"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="bathroom"
          placeholder="Phòng tắm"
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="border p-2 w-full rounded"
      />

      {/* Preview ảnh */}
      {files && (
        <div className="flex flex-wrap gap-2 mt-2">
          {Array.from(files).map((file, i) => (
            <img
              key={i}
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Tạo
      </button>
    </form>
  );
};

export default CreateEstate;
