import h1 from '../../public/anh1.jpg';
import h2 from '../../public/anh3.jpg'
import { FaRegHeart } from "react-icons/fa";


const EstateRental = () => {
  const dataRent = [
    {
      id: 1,
      title: "Căn hộ tiện nghi trung tâm",
      price: "12 triệu/tháng",
      area: "65 m²",
      location: "Quận 1, TP.HCM",
      image: h1,
      owner: "Nguyen Van A",
      type: "Căn hộ"
    },
    {
      id: 2,
      title: "Nhà phố 2 tầng cho thuê",
      price: "18 triệu/tháng",
      area: "110 m²",
      location: "Quận 7, TP.HCM",
      image: h2,
      owner: "Tran Thi B",
      type: "Nhà phố"
    },
    {
      id: 3,
      title: "Biệt thự sân vườn rộng rãi",
      price: "40 triệu/tháng",
      area: "250 m²",
      location: "Thảo Điền, Quận 2",
      image: h1,
      owner: "Le Van C",
      type: "Biệt thự"
    },
    {
      id: 4,
      title: "Căn hộ mini giá rẻ",
      price: "6 triệu/tháng",
      area: "40 m²",
      location: "Bình Thạnh, TP.HCM",
      image: h2,
      owner: "Pham Thi D",
      type: "Căn hộ"
    },
    {
      id: 5,
      title: "Phòng trọ sinh viên đầy đủ nội thất",
      price: "3.5 triệu/tháng",
      area: "25 m²",
      location: "Tân Bình, TP.HCM",
      image: h1,
      owner: "Vo Van E",
      type: "Phòng trọ"
    },
    {
      id: 6,
      title: "Căn hộ view biển",
      price: "15 triệu/tháng",
      area: "80 m²",
      location: "Nha Trang",
      image: h2,
      owner: "Nguyen Thi F",
      type: "Căn hộ"
    },
    {
      id: 7,
      title: "Nhà liền kề khu đô thị",
      price: "20 triệu/tháng",
      area: "120 m²",
      location: "Hà Nội",
      image: h1,
      owner: "Tran Van G",
      type: "Nhà phố"
    },
    {
      id: 8,
      title: "Penthouse cao cấp",
      price: "60 triệu/tháng",
      area: "300 m²",
      location: "TP.HCM",
      image: h2,
      owner: "Do Thi H",
      type: "Penthouse"
    },
  ];

  const categories = [...new Set(dataRent.map(item => item.type))];

  return (
    <div className='w-full min-h-screen mt-8 bg-slate-200 rounded-xl p-6'>
      <h2 className='text-2xl font-bold mb-8 text-center'>Danh Sách Nhà Cho Thuê</h2>
      {categories.map((category) =>
        <div key={category} className='mb-10'>
          <h3 className='gap-6 font-semibold mb-4'>{category}</h3>
          <div className='gap-6 flex-col m-2'>
            {dataRent.filter(item => item.type === category).map((data) => (
              <div
                key={data.id}
                className='bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transtion duration-200 flex flex-row'
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className='w-48 h-40 object-cover m-4 rounded-xl cursor-pointer'
                />
                <div className='p-4 flex flex-1 flex-col'>
                  <h2 className='text-lg font-semibold mb-2'>{data.title}</h2>
                  <p className='text-sky-500 font-bold mb-2'>{data.price}</p>
                  <p className='text-slate-500 font-bold mb-2'>Diện tích : {data.area}</p>
                  <p className='text-slate-500 font-bold mb-2'>Vị Trí : {data.location}</p>
                  <p className='text-slate-500 font-bold mb-2'>Chủ cho Thuê : {data.owner}</p>
                  <div className='mt-auto flex justify-end items-center pt-4'>
                    <FaRegHeart className='text-slate-700 text-xl cursor-pointer hover:text-red-600' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default EstateRental;