import { useEffect, useState } from "react";
import FilterDefault from "../components/filterDefault";
import FilterPrice from "../components/filterPrice";
import type { ICardEstate } from "../dtos/getEstateCard";
import axios from "axios";

const Home = () => {

    const dataft = [
        { name: "Toàn quốc" },
        { name: "Loại bất động sản" },
        { name: "Mức giá" },
        { name: "Diện tích" },
        { name: "Lọc thêm" }
    ]
    const [estate, setEstate] = useState<ICardEstate[]>([])
    useEffect(() => {
        axios.get<ICardEstate[]>("http://localhost:3000/estates")
            .then((res) => {
                setEstate(res.data)
            }).catch((err) => {
                console.error("Error fetching estate:", err)
            });
    }, [])
    return (
        <div className="flex-col w-[100%]">

            <div className=" gap-2 flex items-center bg-white border-2 justify-center h-[60px] min-w-full shadow-md shadow-blue-200 sticky top-20 ">
                {dataft.map((item, index) => (
                    <FilterDefault key={index} name={item.name} />
                ))}
            </div>
            <div className="w-[80%] font-bold text-xl flex-col mt-2 ">
                <p className="justify-center items-center flex">Danh sách bất động sản</p>
                <p className="justify-center items-center flex font-normal text-sm"><i>(Hành trình mới từ ngôi nhà mới, hãy bắt đầu ngay với chúng tôi, chọn ngôi nhà yêu thích của bạn)</i></p>
            </div>
            <div className="p-4 mt-4 gap-4 bg-sky-100 min-h-100vh w-[100%] flex">
                <div className="w-[80%] max-h-full grid grid-cols-4">
                    <div className=" gap-2 h-[600px] border m-2 p-2 rounded-lg bg-slate-300 hover:shadow-md hover:shadow-yellow-400 flex-col">
                        {estate.map((estates) => (
                            <div className="gap-2 flex-col m-2">
                                {estates.title} {estates.price} {estates.type} {estates.address}

                            </div>))}
                    </div>
                </div>
                <div className=" m-2 w-[20%] h-[900px] rounded-xl flex">
                    <FilterPrice />
                </div>
            </div>
        </div>
    );
}

export default Home;