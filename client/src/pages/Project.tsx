import React, { useState } from 'react'
import { GrCaretPrevious,GrCaretNext } from "react-icons/gr";
import { FaRegHeart} from "react-icons/fa";
import h1 from '../img/h1.jpg';

const ITEMS_PER_PAGE = 4;

const Project = () => {
  const properties = [
    {
      id: 1,
      image: h1,
      title: "Bán căn hộ MT Eastmark City 73m2, tầng cao,…",
      price: "3,4 tỷ",
      area: "73 m²",
      location: "Quận 9, Hồ Chí Minh",
    },
    {
      id: 2,
      image: h1,
      title: "Thiện chí bán gấp biệt thự mini 97,5m2 có sân vườn gầ...",
      price: "13,2 tỷ",
      area: "97,5 m²",
      location: "Văn Giang, Hưng Yên",
    },
    {
      id: 3,
      image: h1,
      title: "Bán nhà số riêng 60,8m2 xây 3 tầng full nội thất P...",
      price: "6,79 tỷ",
      area: "60,8 m²",
      location: "Quận 7, Hồ Chí Minh",
    },
    {
      id: 4,
      image: h1,
      title: "Siêu vị trí mặt tiền 7 lầu đường Nguyễn Đình Chiểu...",
      price: "32,6 tỷ",
      area: "58 m²",
      location: "Quận 1, Hồ Chí Minh",
    },
    {
      id: 5,
      image: h1,
      title: "Bán nhà số riêng 64,7m2, xây 3 tầng có sân thượng...",
      price: "5,75 tỷ",
      area: "64,7 m²",
      location: "Nhà Bè, Hồ Chí Minh",
    },
    {
      id: 6,
      image: h1,
      title: "CC Bầu Cát SHR vĩnh viễn có ban công giá 1,55tỷ LH...",
      price: "1,55 tỷ",
      area: "32 m²",
      location: "Tân Bình, Hồ Chí Minh",
    },
    {
      id: 7,
      image: h1,
      title: "Phòng ở ghép khu dân cư cao cấp gần ĐH FPT, UFM, Hutech T...",
      price: "1,5 triệu/tháng",
      area: "100 m²",
      location: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: 8,
      image: h1,
      title: "Chính chủ bán căn hộ Roman Plaza 2PN full đồ giá 6 tỷ hướng...",
      price: "6 tỷ",
      area: "70 m²",
      location: "Nam Từ Liêm, Hà Nội",
    },
    {
      id: 9,
      image: h1,
      title: "Bán căn hộ cao cấp Sunshine City 85m2, full nội thất...",
      price: "5,2 tỷ",
      area: "85 m²",
      location: "Tây Hồ, Hà Nội",
    },
    {
      id: 10,
      image: h1,
      title: "Căn hộ officetel The Sun Avenue giá rẻ...",
      price: "2,1 tỷ",
      area: "45 m²",
      location: "Quận 2, Hồ Chí Minh",
    },
    {
      id: 11,
      image: h1,
      title: "Nhà phố liền kề 100m2 gần Vincom Thủ Đức...",
      price: "7,3 tỷ",
      area: "100 m²",
      location: "Thủ Đức, Hồ Chí Minh",
    },
    {
      id: 12,
      image: h1,
      title: "Đất nền 120m2 gần biển giá cực rẻ...",
      price: "1,8 tỷ",
      area: "120 m²",
      location: "Nha Trang, Khánh Hòa",
    },
    {
      id: 13,
      image: h1,
      title: "Chung cư mini 40m2 trung tâm Đống Đa...",
      price: "1,4 tỷ",
      area: "40 m²",
      location: "Đống Đa, Hà Nội",
    },
    {
      id: 14,
      image: h1,
      title: "Bán nhà 3 tầng mặt tiền đường chính...",
      price: "4,6 tỷ",
      area: "75 m²",
      location: "Hải Châu, Đà Nẵng",
    },
    {
      id: 15,
      image: h1,
      title: "Căn hộ Vinhomes Smart City 2PN, đầy đủ nội thất...",
      price: "2,9 tỷ",
      area: "60 m²",
      location: "Nam Từ Liêm, Hà Nội",
    },
    {
      id: 16,
      image: h1,
      title: "Nhà cấp 4 có gác lửng, sổ riêng, gần chợ...",
      price: "1,2 tỷ",
      area: "50 m²",
      location: "Dĩ An, Bình Dương",
    },
    {
      id: 17,
      image: h1,
      title: "Biệt thự nghỉ dưỡng 200m2 có hồ bơi...",
      price: "15 tỷ",
      area: "200 m²",
      location: "Long Hải, Bà Rịa - Vũng Tàu",
    },
    {
      id: 18,
      image: h1,
      title: "Căn hộ The Manor 3PN sang trọng...",
      price: "7,8 tỷ",
      area: "120 m²",
      location: "Bình Thạnh, Hồ Chí Minh",
    },
    {
      id: 19,
      image: h1,
      title: "Phòng trọ 25m2 có gác lửng, gần KCN...",
      price: "2,2 triệu/tháng",
      area: "25 m²",
      location: "Thuận An, Bình Dương",
    },
    {
      id: 20,
      image: h1,
      title: "Bán đất nền 150m2 gần sân bay...",
      price: "3,9 tỷ",
      area: "150 m²",
      location: "Cẩm Lệ, Đà Nẵng",
    },
    {
      id: 21,
      image: h1,
      title: "Căn hộ studio 28m2 full nội thất...",
      price: "1,25 tỷ",
      area: "28 m²",
      location: "Cầu Giấy, Hà Nội",
    },
    {
      id: 22,
      image: h1,
      title: "Nhà phố 2 mặt tiền trung tâm Quận 5...",
      price: "12 tỷ",
      area: "90 m²",
      location: "Quận 5, Hồ Chí Minh",
    },
    {
      id: 23,
      image: h1,
      title: "Đất nền ven biển 300m2 view đẹp...",
      price: "4,2 tỷ",
      area: "300 m²",
      location: "Phan Thiết, Bình Thuận",
    },
    {
      id: 24,
      image: h1,
      title: "Chung cư cao cấp 2PN gần Hồ Tây...",
      price: "4,5 tỷ",
      area: "80 m²",
      location: "Tây Hồ, Hà Nội",
    },
    {
      id: 25,
      image: h1,
      title: "Nhà vườn 500m2 có ao cá, cây ăn trái...",
      price: "9 tỷ",
      area: "500 m²",
      location: "Lâm Đồng",
    },
    {
      id: 26,
      image: h1,
      title: "Shophouse 3 tầng mặt tiền khu đô thị...",
      price: "11,5 tỷ",
      area: "120 m²",
      location: "Hải Phòng",
    },
    {
      id: 27,
      image: h1,
      title: "Căn hộ Hưng Phát Silver Star 2PN...",
      price: "2,7 tỷ",
      area: "65 m²",
      location: "Nhà Bè, Hồ Chí Minh",
    },
    {
      id: 28,
      image: h1,
      title: "Biệt thự ven sông diện tích 400m2...",
      price: "25 tỷ",
      area: "400 m²",
      location: "Quận 2, Hồ Chí Minh",
    },
  ];

  const [isClick, setIsClick] = useState(0);
  
      const clickPrev = () => {
        setIsClick((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
      };
  
      const clickNext = () => {
        setIsClick((prev) =>
          Math.min(prev + ITEMS_PER_PAGE, properties.length - ITEMS_PER_PAGE)
        );
      };
  
      const visibleProperties = properties.slice(
        isClick,
        isClick + ITEMS_PER_PAGE
      );

  return (
    <div className='w-full min-h-screen mt-8 bg-slate-200 rounded-xl p-6'>        
        <div className='relative mb-10'>
          <h3 className='text-xl font-bold mb-5 ml-8'>Dự Án Đang Mở Bán</h3>        
          <div className="flex items-center justify-between">
             {isClick > 0 && (
                <div
                onClick={clickPrev}
                className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
                >
                  <GrCaretPrevious size={24} />
                </div>
                )}
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1 px-4">
                {visibleProperties.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-60 object-cover rounded-md"
                      />
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-slate-300 cursor-pointer">
                        <FaRegHeart className="text-slate-700 hover:text-red-600" size={20} />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col flex-1">
                      <h3 className="text-black font-semibold mb-1">{p.title}</h3>
                      <p className="text-black font-semibold mb-1">{p.area}</p>
                      <p className="text-black font-semibold mb-1">{p.price}</p>
                      <p className="text-black font-semibold">{p.location}</p>
                    </div>

                    <div className="mt-4 bg-sky-300 text-white text-center px-4 py-4 rounded hover:bg-sky-600 transition-colors">
                      Xem Chi Tiết
                    </div>
                  </div>
                ))}
          </div>
       
            {isClick + ITEMS_PER_PAGE < properties.length &&(
              <div
              onClick={clickNext}
              className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
              >
                <GrCaretNext size={24} />
              </div>
              )}
            </div>
        </div> 
        <div className='relative mb-10'>
          <h3 className='text-xl font-bold mb-5 ml-8'>Dự Án Sắp mở bán</h3>        
          <div className="flex items-center justify-between">
             {isClick > 0 && (
                <div
                onClick={clickPrev}
                className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
                >
                  <GrCaretPrevious size={24} />
                </div>
                )}        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1 px-4">
              {visibleProperties.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-60 object-cover rounded-md"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-slate-300 cursor-pointer">
                      <FaRegHeart className="text-slate-700 hover:text-red-600" size={20} />
                    </div>
                  </div>


                  <div className="mt-5 flex flex-col flex-1">
                    <h3 className="text-black font-semibold mb-1">{p.title}</h3>
                    <p className="text-black font-semibold mb-1">{p.area}</p>
                    <p className="text-black font-semibold mb-1">{p.price}</p>
                    <p className="text-black font-semibold">{p.location}</p>
                  </div>


                  <div className="mt-4 bg-sky-300 text-white text-center px-4 py-4 rounded hover:bg-sky-600 transition-colors">
                    Xem Chi Tiết
                  </div>
                </div>
              ))}
          </div>        
            {isClick + ITEMS_PER_PAGE < properties.length && (
              <div
              onClick={clickNext}
              className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
              >
                <GrCaretNext size={24} />
              </div>
              )}
          </div>
        </div>
        <div className='relative mb-10'>
          <h3 className='text-xl font-bold mb-5 ml-8'>Dự Án Đã Bàn Giao</h3>        
          <div className="flex items-center justify-between">
             {isClick > 0 && (
                <div
                onClick={clickPrev}
                className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
                >
                  <GrCaretPrevious size={24} />
                </div>
                )}
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1 px-4">
                {visibleProperties.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-60 object-cover rounded-md"
                      />
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-slate-300 cursor-pointer">
                        <FaRegHeart className="text-slate-700 hover:text-red-600" size={20} />
                      </div>
                    </div>


                    <div className="mt-5 flex flex-col flex-1">
                      <h3 className="text-black font-semibold mb-1">{p.title}</h3>
                      <p className="text-black font-semibold mb-1">{p.area}</p>
                      <p className="text-black font-semibold mb-1">{p.price}</p>
                      <p className="text-black font-semibold">{p.location}</p>
                    </div>


                    <div className="mt-4 bg-sky-300 text-white text-center px-4 py-4 rounded hover:bg-sky-600 transition-colors">
                      Xem Chi Tiết
                    </div>
                  </div>
                ))}
          </div>        
            {isClick + ITEMS_PER_PAGE < properties.length && (
              <div
              onClick={clickNext}
              className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
              >
                <GrCaretNext size={24} />
              </div>
              )}
          </div>
        </div>
    </div>
  )
}
export default Project;
