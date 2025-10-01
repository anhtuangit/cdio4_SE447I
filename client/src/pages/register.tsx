const Register = () => {
  return (
    <div className="h-screen w-full items-center justify-center flex bg-sky-300">
      <div className="h-[42rem] w-[35rem] rounded-xl flex-col bg-white flex p-6 items-center">
        {/* Header */}
        <div className="flex flex-col h-[8rem] w-[100%] items-center pt-6">
          <span className="text-3xl font-bold pb-2">Đăng ký</span>
          <span>Tạo tài khoản mới để bắt đầu !</span>
        </div>

        {/* Họ tên */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Họ và tên</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="text"
            placeholder=" Nhập họ tên"
          />
        </div>

        {/* Tên đăng nhập */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Tên đăng nhập</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="text"
            placeholder=" Nhập tên đăng nhập"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Email</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="email"
            placeholder=" Nhập email"
          />
        </div>

        {/* Số điện thoại */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Số điện thoại</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="tel"
            placeholder=" Nhập số điện thoại"
          />
        </div>

        {/* Địa chỉ */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Địa chỉ</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="text"
            placeholder=" Nhập địa chỉ"
          />
        </div>

        {/* Mật khẩu */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Mật khẩu</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="password"
            placeholder=" Nhập mật khẩu"
          />
        </div>

        {/* Xác nhận mật khẩu */}
        <div className="flex flex-col h-[5rem] w-[100%]">
          <label className="pl-2">Xác nhận mật khẩu</label>
          <input
            className="focus:border-blue-400 border-2 border-gray-300 outline-0 bg-transparent h-10 rounded-lg items-center justify-center m-2 flex px-2"
            type="password"
            placeholder=" Nhập lại mật khẩu"
          />
        </div>

        {/* Button */}
        <button className="h-[2.5rem] bg-sky-400 w-[97%] rounded-lg text-white p-2 m-2 active:scale-95 hover:bg-blue-700">
          Đăng Ký
        </button>

        <p>
          Đã có tài khoản?{" "}
          <a className="text-blue-600 font-bold" href="/login">
            Đăng nhập ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
