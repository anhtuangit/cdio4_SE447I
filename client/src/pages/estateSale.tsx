
import { FaRegHeart } from "react-icons/fa";
import FilterPrice from '../components/filterPrice';
import type { ICardEstate } from "../dtos/getEstateCard";
import { useEffect, useState } from "react";
import axios from "axios";
import imgDf from '../../public/pexels-tomas-malik-793526-2581922.jpg'
import Button from "../components/button";


const EstateSale = () => {
    const [estates, setEstates] = useState<ICardEstate[]>([]);
    useEffect(() => {
        const fetchEstates = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/estates", {
                    params: { category: "sale" },
                });
                setEstates(res.data.data || []);
            } catch (error) {
                console.error("Lỗi khi tải danh sách estate:", error);
            }
        };

        fetchEstates();
    }, []);


    return (
        <div className='w-full min-h-screen mt-8 rounded-xl p-4 flex flex-col gap-6'>

            <div className='justify-center flex w-[80%] h-[10px] text-xl'>
                <span>Danh sách bất động sản Bán </span>
            </div>
            <div className="w-full min-h-screen mt-8 rounded-xl p-6 flex flex-row gap-6">

                <div className="w-[80%] bg-slate-300 min-h-screen rounded-xl p-6">

                    <div>
                        {estates.map((estate) => (
                            <div key={estate._id} className="mb-10">
                                <h3 className="text-lg font-semibold mb-4">{estate.type.name}</h3>
                                <div className="flex flex-col space-y-6 m-2 mt-6">
                                    <div
                                        key={estate._id}
                                        className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-200 flex flex-row"
                                    >
                                        <img
                                            src={imgDf}
                                            alt="No data picture estate"
                                            className="w-48 h-40 object-cover m-4 rounded-xl cursor-pointer"
                                        />
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h2 className="text-lg font-semibold mb-2">{estate.title}</h2>
                                            <p className="text-sky-500 font-bold mb-2">Giá: {estate.price} Triệu</p>
                                            <p className="text-slate-500 font-bold mb-2">Diện tích : {estate.acreage} m</p>
                                            <p className="text-slate-500 font-bold mb-2">Vị Trí : {estate.address},{estate.ward.name},{estate.ward.city.name}</p>

                                            <div className="mt-auto flex justify-end items-center pt-4">
                                                <FaRegHeart className="text-slate-700 text-xl cursor-pointer hover:text-red-600" />
                                            </div>
                                            <div className="mt-2">
                                                <Button svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M12.756 11.519V7.565a1.756 1.756 0 0 0-3.512 0v8.785l-3.362-.748a.88.88 0 0 0-.922.37l-.544.817l3.862 5.024c.332.432.847.686 1.393.686h7.085c.756 0 1.428-.484 1.667-1.202l1.782-5.35a1.76 1.76 0 0 0-.78-2.073l-3.626-2.115a1.76 1.76 0 0 0-.885-.24z" /><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M9.244 16.351V7.566a1.756 1.756 0 0 1 3.512 0v3.954h2.158a1.76 1.76 0 0 1 .885.24l3.625 2.115a1.76 1.76 0 0 1 .781 2.073l-1.782 5.35a1.76 1.76 0 0 1-1.667 1.202H9.671c-.546 0-1.06-.254-1.393-.686L4.416 16.79l.544-.816a.88.88 0 0 1 .922-.37zM6 5.499l-1-1m11 1l1-1m-6-1.585V1.5" /></g></svg>}
                                                    name="Chi tiết" href={`/estates/${estate._id}`} />
                                            </div>
                                        </div>
                                    </div>
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
export default EstateSale;