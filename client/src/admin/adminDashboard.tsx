
import { Outlet } from "react-router-dom";

const AdminDashBoard = () => {
    return (
        <div className="flex min-h-screen w-full gap-4">
            <div className="flex flex-col rounded-lg border-2 m-2 mt-10 w-[20%] pt-4 p-1">
                <div className="flex mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg>
                    <span className=" mb-1 h-10">Menu quản lý</span>
                </div>
                <div className="border-2 rounded-lg mb-1 h-10 flex gap-2 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545L20.118 7v10.167q9.523.075 16.192 6.833q6.668 6.758 7.69 16.836Z" clip-rule="evenodd" /></svg>                    <a href="/">
                        Về trang chủ
                    </a>
                </div>
                <div className="border-2 rounded-lg mb-1 h-10 flex gap-2 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7" /></svg>
                    <a href="/admin">Quản lý người dùng</a>
                </div>
                <div className="border-2 rounded-lg mb-1 h-10 flex gap-2 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z" /><path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11v18Z" /></svg>
                    <a href="/admin/estates">Quản lý bất động sản</a>
                </div>
            </div>
            <div className="w-[77%] mt-10 border-2 rounded-xl p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashBoard;