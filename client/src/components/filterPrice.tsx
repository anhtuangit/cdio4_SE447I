const FilterPrice = () => {
    return (
        <div className="h-[800px] w-full flex-col space-y-6">
            <div className="border-4 border-gray-300 rounded-lg pt-2 bg-white">
                <span className="font-bold font-serif p-2">
                    Lọc theo giá
                </span>
                <div className="h-[220px] grid grid-cols-2 items-center justify-center gap-1 p-4 text-blue-500 text-sm">
                    <a href="">Dưới 500 triệu</a>
                    <a href="">500 - 800 triệu</a>
                    <a href="">500 triệu - 1 tỷ</a>
                    <a href="">1 - 2 tỷ</a>
                    <a href="">2 - 3 tỷ</a>
                    <a href="">3 - 5 tỷ</a>
                    <a href="">5 - 7 tỷ</a>
                    <a href="">7 - 10 tỷ</a>
                    <a href="">10 - 20 tỷ</a>
                    <a href="">20 - 30 tỷ</a>
                    <a href="">30 - 40 tỷ</a>
                    <a href="">40 - 60 tỷ</a>
                    <a href="">Trên 60 tỷ</a>
                </div>
            </div >
            <div className="border-4 border-gray-300 rounded-lg pt-2 bg-white">
                <span className="font-bold p-2">
                    Nhà đất hot 2025
                </span>
                <div className="h-[220px] grid grid-cols-2 items-center justify-center gap-1 p-4 text-blue-500 text-sm">
                    <a href="">TP Hồ Chí Minh</a>
                    <a href="">Hà Nội</a>
                    <a href="">Đà Nẵng</a>
                    <a href="">Long An</a>
                    <a href="">Khánh Hòa</a>
                    <a href="">Đồng Nai</a>
                    <a href="">Bình Phước</a>
                    <a href="">Lâm Đồng</a>
                    <a href="">Hải Phòng</a>
                    <a href="">Bình Thuận</a>
                    <a href="">Quảng Nam</a>
                    <a href="">Quảng Ninh</a>
                    <a href="">Tây Ninh</a>
                    <a href="">Cần Thơ</a>
                </div>
            </div >
        </div >
    );
}

export default FilterPrice;