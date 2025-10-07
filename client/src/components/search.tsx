const SearchAndFilter = () => {
    return (
        <div className=" flex w-[100%] h-[100%] items-center">

            <input className="p-2 text-base w-[80%] h-[40%] bg-transparent border border-green-600 border-shadow:sm focus-within:outline-0 focus:shadow-md focus:shadow-green-500 rounded-md placeholder:text-white" type="text" placeholder="Tìm kiếm bất động sản " />
            <button className="hover:scale-105 active:scale-95 m-4 bg-blue-300 border border-blue-500 hover:shadow-green-400 hover:shadow-md rounded-lg h-8 w-[12%] hover:bg-blue-400 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" /><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485" /></g></svg>
            </button>
        </div>
    );
}

export default SearchAndFilter;