import { useEffect, useState } from "react";
import axios from "axios";
import type { ICardEstate } from "../dtos/getEstateCard";
import Button from "./button";

const CardState = () => {
  const [estates, setEstates] = useState<ICardEstate[]>([]);

  useEffect(() => {
    // Gọi API để lấy danh sách bất động sản
    const fetchEstates = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/estates"); // Đổi URL phù hợp với API của bạn
        setEstates(res.data.data || []); // Giả sử API trả về { data: [...] }
      } catch (error) {
        console.error("Lỗi khi tải danh sách estate:", error);
      }
    };

    fetchEstates();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-4 mt-10">
      {estates.length === 0 ? (
        <p className="text-center col-span-3 text-gray-600">
          Không có dữ liệu bất động sản.
        </p>
      ) : (
        estates.map((estate) => (
          <div
            key={estate.title + estate.address}
            className="border rounded-lg bg-white shadow-md hover:shadow-yellow-400 p-4 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold text-gray-800">{estate.title}</h3>
            <p className="text-gray-600 line-clamp-2">{estate.description}</p>
            <p className="text-blue-700 font-medium">
              💰 Giá: {estate.price.toLocaleString()} triệu
            </p>
            <p className="text-sm text-gray-500">
              📍 {estate.address} - {estate.ward?.name}, {estate.ward?.city?.name}
            </p>
            <p className="text-sm text-gray-500">🏠 Loại: {estate.type?.name}</p>
            <div className="mt-2">
              <Button svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M12.756 11.519V7.565a1.756 1.756 0 0 0-3.512 0v8.785l-3.362-.748a.88.88 0 0 0-.922.37l-.544.817l3.862 5.024c.332.432.847.686 1.393.686h7.085c.756 0 1.428-.484 1.667-1.202l1.782-5.35a1.76 1.76 0 0 0-.78-2.073l-3.626-2.115a1.76 1.76 0 0 0-.885-.24z"/><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M9.244 16.351V7.566a1.756 1.756 0 0 1 3.512 0v3.954h2.158a1.76 1.76 0 0 1 .885.24l3.625 2.115a1.76 1.76 0 0 1 .781 2.073l-1.782 5.35a1.76 1.76 0 0 1-1.667 1.202H9.671c-.546 0-1.06-.254-1.393-.686L4.416 16.79l.544-.816a.88.88 0 0 1 .922-.37zM6 5.499l-1-1m11 1l1-1m-6-1.585V1.5"/></g></svg>} name="Chi tiết" href={`/estates/${estate._id}`} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardState;
