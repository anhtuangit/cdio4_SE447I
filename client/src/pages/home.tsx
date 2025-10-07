import CardState from "../components/cardEstate";
import FilterDefault from "../components/filterDefault";
import FilterPrice from "../components/filterPrice";

const Home = () => {
    const data = [
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        },
        {
            img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        },
        {
            img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        },
        {
            img: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng", acreage: 120

        }
    ]
    const dataft = [
        { name: "Toàn quốc" },
        { name: "Loại bất động sản" },
        { name: "Mức giá" },
        { name: "Diện tích" },
        { name: "Lọc thêm" }
    ]
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
                    {data.map((item, index) => (
                        <CardState key={index} img={item.img} describe={item.describe} price={item.price} location={item.location} acreage={item.acreage} />
                    ))}
                </div>
                <div className=" m-2 w-[20%] h-[900px] rounded-xl flex">
                    <FilterPrice />
                </div>
            </div>
        </div>
    );
}

export default Home;