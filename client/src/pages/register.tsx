export const Register = () => {
    return (
        <div className="h-screen w-full items-center justify-center flex bg-gray-600">
            <div className="h-[30rem] w-[35rem] rounded-xl flex-col bg-white flex p-6 items-center">
                <div className=" flex flex-col h-[8rem] w-[100%] items-center pt-6">
                    <span className="text-3xl font-bold pb-2">Đăng ký</span>
                    <span>Chào mừng bạn đến với thế giới bất động sản real-estate !</span>
                </div>
                <div className="flex flex-col h-[5rem] w-[100%] ">
                    <label className="pl-2">Tên đăng nhập</label>
                    <input className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex" type="text" placeholder=" Nhập tên đăng nhập" />
                </div>
                <div className="flex flex-col h-[5rem] w-[100%] ">
                    <label className="pl-2">Mật khẩu</label>
                    <input className="focus:border-blue-400 border-2 border-gray-300 bg-transparent outline-0 h-10 rounded-lg items-center justify-center m-2 flex" type="text" placeholder=" Nhập mật khẩu" />
                </div>
                <button className="h-[2.5rem] bg-sky-400 w-[97%] rounded-lg text-white p-2 m-2 active:scale-95 hover:bg-blue-700">Đăng ký</button>
                <p>đã có tài khoản ?  <a className="text-blue-600 font-bold" href="/login">Đăng nhập ngay</a></p>
            </div>
        </div>
    );
}