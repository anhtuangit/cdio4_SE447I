import { useState } from 'react';
import { FaRegHeart} from "react-icons/fa";



export const HomeSale = () => {
  const dataBDS = [
  {
    id: 1,
    title: "Căn hộ cao cấp view thành phố",
    price: "3.5 Tỷ",
    area: "75 m²",
    location: "Quận 1, TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Van A"
  },
  {
    id: 2,
    title: "Nhà phố 3 tầng hiện đại",
    price: "4.2 Tỷ",
    area: "120 m²",
    location: "Quận 7, TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Thi B"
  },
  {
    id: 3,
    title: "Biệt thự vườn rộng rãi",
    price: "12 Tỷ",
    area: "250 m²",
    location: "Đà Nẵng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Le Van C"
  },
  {
    id: 4,
    title: "Căn hộ mini giá rẻ",
    price: "1.2 Tỷ",
    area: "45 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Thi D"
  },
  {
    id: 5,
    title: "Nhà mặt tiền đường lớn",
    price: "6.5 Tỷ",
    area: "95 m²",
    location: "Quận Bình Thạnh, TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Vo Van E"
  },
  {
    id: 6,
    title: "Căn hộ view biển",
    price: "4.7 Tỷ",
    area: "85 m²",
    location: "Nha Trang",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Thi F"
  },
  {
    id: 7,
    title: "Đất nền khu dân cư",
    price: "900 Triệu",
    area: "60 m²",
    location: "Bình Dương",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Van G"
  },
  {
    id: 8,
    title: "Nhà cấp 4 thoáng mát",
    price: "1.5 Tỷ",
    area: "70 m²",
    location: "Đồng Nai",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Thi H"
  },
  {
    id: 9,
    title: "Căn hộ Officetel tiện ích",
    price: "2.1 Tỷ",
    area: "55 m²",
    location: "Quận 3, TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Van I"
  },
  {
    id: 10,
    title: "Shophouse kinh doanh sầm uất",
    price: "8.9 Tỷ",
    area: "150 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Le Thi J"
  },
  {
    id: 11,
    title: "Căn hộ Vinhomes sang trọng",
    price: "3.5 Tỷ",
    area: "90 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Do Van K"
  },
  {
    id: 12,
    title: "Nhà phố 2 mặt tiền",
    price: "7.2 Tỷ",
    area: "110 m²",
    location: "Quận 5, TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Thi L"
  },
  {
    id: 13,
    title: "Biệt thự nghỉ dưỡng",
    price: "15 Tỷ",
    area: "300 m²",
    location: "Phú Quốc",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Van M"
  },
  {
    id: 14,
    title: "Căn hộ studio tiện lợi",
    price: "1.1 Tỷ",
    area: "40 m²",
    location: "Đà Nẵng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Le Thi N"
  },
  {
    id: 15,
    title: "Nhà liền kề đô thị mới",
    price: "5.4 Tỷ",
    area: "100 m²",
    location: "Hải Phòng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Van O"
  },
  {
    id: 16,
    title: "Căn hộ sinh viên giá rẻ",
    price: "650 Triệu",
    area: "30 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Thi P"
  },
  {
    id: 17,
    title: "Nhà phố dự án mới",
    price: "4.2 Tỷ",
    area: "95 m²",
    location: "Cần Thơ",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Van Q"
  },
  {
    id: 18,
    title: "Penthouse siêu sang",
    price: "22 Tỷ",
    area: "350 m²",
    location: "TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Thi R"
  },
  {
    id: 19,
    title: "Nhà vườn ngoại ô",
    price: "3.9 Tỷ",
    area: "140 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Vo Van S"
  },
  {
    id: 20,
    title: "Căn hộ EcoGreen",
    price: "2.9 Tỷ",
    area: "80 m²",
    location: "TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Do Thi T"
  },
  {
    id: 21,
    title: "Nhà mặt phố kinh doanh",
    price: "11 Tỷ",
    area: "160 m²",
    location: "Đà Nẵng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Le Van U"
  },
  {
    id: 22,
    title: "Biệt thự song lập",
    price: "9.5 Tỷ",
    area: "210 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Van V"
  },
  {
    id: 23,
    title: "Căn hộ dịch vụ đầy đủ",
    price: "2.2 Tỷ",
    area: "60 m²",
    location: "TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Thi W"
  },
  {
    id: 24,
    title: "Đất nền dự án",
    price: "1.8 Tỷ",
    area: "75 m²",
    location: "Bình Dương",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Van X"
  },
  {
    id: 25,
    title: "Nhà trọ sinh viên",
    price: "950 Triệu",
    area: "50 m²",
    location: "Cần Thơ",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Thi Y"
  },
  {
    id: 26,
    title: "Căn hộ Times City",
    price: "3.7 Tỷ",
    area: "88 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Van Z"
  },
  {
    id: 27,
    title: "Nhà phố view sông",
    price: "5.9 Tỷ",
    area: "130 m²",
    location: "Đà Nẵng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Van AA"
  },
  {
    id: 28,
    title: "Biệt thự cổ điển",
    price: "18 Tỷ",
    area: "400 m²",
    location: "Huế",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Thi BB"
  },
  {
    id: 29,
    title: "Căn hộ Landmark 81",
    price: "6.3 Tỷ",
    area: "100 m²",
    location: "TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Le Van CC"
  },
  {
    id: 30,
    title: "Nhà liền kề dự án mới",
    price: "7.4 Tỷ",
    area: "125 m²",
    location: "Hải Phòng",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Thi DD"
  },
  {
    id: 31,
    title: "Đất nền mặt tiền",
    price: "2.6 Tỷ",
    area: "90 m²",
    location: "Đồng Nai",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Nguyen Van EE"
  },
  {
    id: 32,
    title: "Căn hộ Goldmark City",
    price: "4.1 Tỷ",
    area: "95 m²",
    location: "Hà Nội",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Tran Thi FF"
  },
  {
    id: 33,
    title: "Nhà phố 4 tầng hiện đại",
    price: "6.8 Tỷ",
    area: "150 m²",
    location: "TP.HCM",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    sale: "Pham Van GG"
  }
];

  return (
    <div>
      <div className="w-full min-h-screen mt-10 bg-gray-200 p-8 border-neutral-800 rounded-xl">
<h1 className="text-xl font-bold mb-6 text-center">Danh Sách Bất Động Sản</h1>

        <div className="gap-8 mt-2 flex flex-col">
          {dataBDS.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-200 flex flex-row"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-300 h-140 object-cover m-4 rounded-lg cursor-pointer"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
                <p className="text-red-600 font-bold mb-2">{data.price}</p>
                <p className="text-gray-600 text-sm mb-1">Diện Tích: {data.area}</p>
                <p className="text-gray-600 text-sm mb-1">Vị Trí: {data.location}</p>
                <p className="text-gray-600 text-sm mb-1">Người Bán: {data.sale}</p>

                <div className="mt-auto flex justify-end items-center pt-2">
                  <FaRegHeart className="text-slate-700 text-xl cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeSale;