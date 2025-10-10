import { useState } from "react";
import axios from "axios";
import type { IEstate } from "../dtos/getEstate";
import { useNavigate } from "react-router-dom";

const CreateEstate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Omit<IEstate, "_id">>({
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
    id_user: { id_: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((f) => URL.createObjectURL(f));
    setFormData({ ...formData, img_urls: urls });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/estates", formData);
      console.log("Estate created:", res.data);
      alert("✅ Thêm bất động sản thành công!");
      navigate("/");
    } catch (error) {
      console.error("❌ Lỗi khi thêm bất động sản:", error);
      alert("Lỗi khi thêm bất động sản");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">🆕 Thêm bất động sản mới</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Tiêu đề" value={formData.title} onChange={handleChange} className="border p-2 w-full rounded" />
        <textarea name="description" placeholder="Mô tả" value={formData.description} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="price" type="number" placeholder="Giá (triệu)" value={formData.price} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="bedroom" type="number" placeholder="Số phòng ngủ" value={formData.bedroom} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="bathroom" type="number" placeholder="Số phòng tắm" value={formData.bathroom} onChange={handleChange} className="border p-2 w-full rounded" />
        <input type="file" multiple onChange={handleImageChange} className="border p-2 w-full rounded" />

        {formData.img_urls.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {formData.img_urls.map((url, i) => (
              <img key={i} src={url} alt={`img-${i}`} className="h-24 object-cover rounded" />
            ))}
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Đang lưu..." : "Lưu bất động sản"}
        </button>
      </form>
    </div>
  );
};

export default CreateEstate;
