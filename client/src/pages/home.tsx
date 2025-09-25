import CardState from "../components/cardEstate";
import FilterAdvanced from "../components/filterAdvanced";


const Home = () => {
    const data = [
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây có view biển để có thể ngắm tất cả các cảnh hoàng hôn vào buổi chiều tà ", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },

        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },

        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },
        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        },

        {
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", describe: "Căn hộ chung cư cao cấp và hiện đại bậc nhất phía tây", price: 120, location: "123 Hai Bà Trưng, Đà Nẵng"

        }
    ]
    return (
        <div>
            <div className="w-[80%] font-bold text-xl justify-center flex pt-4">
                <span>Danh sách bất động sản.</span>
            </div>
            <div className="p-4 mt-4 gap-4 bg-sky-100 min-h-100vh w-[100%] flex">
                <div className="w-[80%] max-h-full grid grid-cols-4">
                    {data.map((item, index) => (
                        <CardState key={index} img={item.img} describe={item.describe} price={item.price} location={item.location} />
                    ))}
                </div>
                <div className=" m-2 w-[20%] justify-end rounded-xl flex-col">
                    <FilterAdvanced />
                </div>
            </div>
        </div>
    );
}

export default Home;