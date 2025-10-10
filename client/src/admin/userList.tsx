import type React from "react";
import { useEffect, useState } from "react";
import type { IListUser } from "../dtos/getListUsers";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState<IListUser[]>([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/users");
                setUsers(res.data.data || []);
            } catch (error) {
                console.error("Lỗi khi tải danh sách estate:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="flex-col h-[100%] w-[100%]">
            <div className="text-xl mb-2 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7" /></svg>
                <p>Danh sách người dùng</p>
            </div>
            {users.map((user) => (
                <div className="gap-2 flex m-2 h-[70px] w-full rounded-lg border-2 border-gray-400">
                    <div className="justify-center flex items-center pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0" /></svg>
                    </div>
                    <div className="flex flex-col w-[40%] justify-center pl-4">
                        <span>Name User: {user.name}</span>
                        <span>Email: {user.email}</span>
                    </div>
                    <div className="flex w-[30%] items-center">
                        <span> Status: {user.status}</span>
                    </div>
                    <div className="flex w-[30%] gap-6 justify-end items-center mr-4">
                        <a href="" className=" flex gap-2 border-2 rounded-lg p-1 hover:scale-105 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /><circle cx="12" cy="12" r="1" /><path d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0" /></g></svg>
                            <span> Xem</span>
                        </a>
                        <a href="" className="flex gap-2 p-1 border-2 rounded-lg hover:scale-105 hover:bg-gray-200">
                            {user.status === 'unlock' ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M12 25.14V28h2v-2.77a2.42 2.42 0 1 0-2-.09" class="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="M26 2a8.2 8.2 0 0 0-8 8.36V15H2v17a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15h-4v-4.64A6.2 6.2 0 0 1 26 4a6.2 6.2 0 0 1 6 6.36v6.83a1 1 0 0 0 2 0v-6.83A8.2 8.2 0 0 0 26 2m-4 15v15H4V17Z" class="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            }
                            <span>{user.status === 'unlock' ? 'Vô hiệu hóa' : 'Kích hoạt'}</span>
                        </a>
                    </div>
                </div>))}
        </div>
    );
};
export default UserList;