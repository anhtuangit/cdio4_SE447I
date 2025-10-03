
import { FaRegHeart } from "react-icons/fa";
import FilterPrice from '../components/filterPrice';


const EstateRental = () => {
  const dataRent = [
    {
      id: 1,
      title: "Căn hộ tiện nghi trung tâm",
      price: "12 triệu/tháng",
      area: "65 m²",
      location: "Quận 1, TP.HCM",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Nguyen Van A",
      type: "Căn hộ"
    },
    {
      id: 2,
      title: "Nhà phố 2 tầng cho thuê",
      price: "18 triệu/tháng",
      area: "110 m²",
      location: "Quận 7, TP.HCM",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Tran Thi B",
      type: "Nhà phố"
    },
    {
      id: 3,
      title: "Biệt thự sân vườn rộng rãi",
      price: "40 triệu/tháng",
      area: "250 m²",
      location: "Thảo Điền, Quận 2",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Le Van C",
      type: "Biệt thự"
    },
    {
      id: 4,
      title: "Căn hộ mini giá rẻ",
      price: "6 triệu/tháng",
      area: "40 m²",
      location: "Bình Thạnh, TP.HCM",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Pham Thi D",
      type: "Căn hộ"
    },
    {
      id: 5,
      title: "Phòng trọ sinh viên đầy đủ nội thất",
      price: "3.5 triệu/tháng",
      area: "25 m²",
      location: "Tân Bình, TP.HCM",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Vo Van E",
      type: "Phòng trọ"
    },
    {
      id: 6,
      title: "Căn hộ view biển",
      price: "15 triệu/tháng",
      area: "80 m²",
      location: "Nha Trang",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Nguyen Thi F",
      type: "Căn hộ"
    },
    {
      id: 7,
      title: "Nhà liền kề khu đô thị",
      price: "20 triệu/tháng",
      area: "120 m²",
      location: "Hà Nội",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Tran Van G",
      type: "Nhà phố"
    },
    {
      id: 8,
      title: "Penthouse cao cấp",
      price: "60 triệu/tháng",
      area: "300 m²",
      location: "TP.HCM",
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
      owner: "Do Thi H",
      type: "Penthouse"
    },
  ];

  const categories = [...new Set(dataRent.map(item => item.type))];

  return (
    <div className='w-full min-h-screen mt-8 rounded-xl p-4 flex flex-col gap-6'>

      <div className='justify-center flex w-[80%] h-[10px] text-xl'>
        <span>Danh sách bất động sản cho thuê </span>
      </div>
      <div className="w-full min-h-screen mt-8 rounded-xl p-6 flex flex-row gap-6">

        <div className="w-[80%] bg-slate-300 min-h-screen rounded-xl p-6">

          <div>
            {categories.map((category) => (
              <div key={category} className="mb-10">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-col space-y-6 m-2 mt-6">
                  {dataRent
                    .filter((item) => item.type === category)
                    .map((data) => (
                      <div
                        key={data.id}
                        className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-200 flex flex-row"
                      >
                        <img
                          src={data.image}
                          alt={data.title}
                          className="w-48 h-40 object-cover m-4 rounded-xl cursor-pointer"
                        />
                        <div className="p-4 flex-1 flex flex-col">
                          <h2 className="text-lg font-semibold mb-2">{data.title}</h2>
                          <p className="text-sky-500 font-bold mb-2">{data.price}</p>
                          <p className="text-slate-500 font-bold mb-2">Diện tích : {data.area}</p>
                          <p className="text-slate-500 font-bold mb-2">Vị Trí : {data.location}</p>
                          <p className="text-slate-500 font-bold mb-2">Chủ cho Thuê : {data.owner}</p>
                          <div className="mt-auto flex justify-end items-center pt-4">
                            <FaRegHeart className="text-slate-700 text-xl cursor-pointer hover:text-red-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[20%] h-[900px] bg-slate-300 rounded-xl pt-16 p-2">
          <FilterPrice />
        </div>
      </div>
    </div>


  )
}
export default EstateRental;