const FilterAdvanced = () => {
    return (

        <div className=" h-[900px]  flex-col gap-2 border-2 rounded-xl bg-gray-300">
            <a href="" className="mb-2 flex items-center gap-2 border-2 border-blue-400 rounded-md p-2 bg-sky-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 1a3 3 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3 3 0 0 0 6 1M5 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 5a3 3 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3 3 0 0 0 10 9m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0" /></svg>
                <span>Lọc theo tiêu chí</span>
            </a>
            <div className="h-[27%]">
                lọc theo giá
            </div >
            <div className="h-[30%]">
                lọc theo loại hình
            </div>
            <div className="h-[30%]">
                lọc theo khu vực
            </div>
            <div className="justify-center h-[10%] w-[100%] flex gap-10 p-2">
                <button className="active:scale-95 hover:bg-pink-300 bg-pink-200 border-2 rounded-lg flex h-10 w-[30%] justify-center items-center">lọc</button>
                <button className="active:scale-95 hover:bg-green-500 bg-green-400 border-2 rounded-lg flex h-10 w-[30%] justify-center items-center">làm mới</button>
            </div>
        </div>
    );
}

export default FilterAdvanced;