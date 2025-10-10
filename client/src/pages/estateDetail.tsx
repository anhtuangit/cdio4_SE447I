import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import type { IEstate } from "../dtos/getEstate";

const EstateDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [estate, setEstate] = useState<IEstate | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEstateDetail = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/estates/${id}`);
                setEstate(res.data.data);
            } catch (error) {
                console.error(" Lỗi khi tải chi tiết estate:", error);
            }
        };
        fetchEstateDetail();
    }, [id]);

    if (!estate) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">Đang tải dữ liệu bất động sản...</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
            <div className="mb-4">
                <button onClick={() => navigate(-1)}>⬅️ Quay lại</button>
            </div>

            {estate.img_urls?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {estate.img_urls.map((url, i) => (
                        <img
                            key={i}
                            src={url}
                            alt={`Ảnh ${i + 1}`}
                            className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform"
                        />
                    ))}
                </div>
            )}

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{estate.title}</h1>
            <p className="text-gray-600 mb-4">{estate.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">💰 Giá: </span>
                    {estate.price.toLocaleString()} triệu
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">📍 Địa chỉ: </span>
                    {estate.address}
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">🏙️ Khu vực: </span>
                    {estate.ward?.name}, {estate.ward?.city?.name}
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">🏠 Loại: </span>
                    {estate.type?.name}
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">📂 Danh mục: </span>
                    {estate.category === 'rental' ? 'cho thuê' : 'bán'}
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">🛏️ Phòng ngủ: </span>
                    {estate.bedroom}
                </div>

                <div className="p-3 bg-slate-100 rounded-lg">
                    <span className="font-semibold">🛁 Phòng tắm: </span>
                    {estate.bathroom}
                </div>
            </div>

            <div className="border-t pt-4 text-gray-700">
                <p>
                    👤 <span className="font-semibold">Người đăng:</span>{" "}
                    {estate.id_user?.name}
                </p>
            </div>
        </div>
    );
};

export default EstateDetail;
