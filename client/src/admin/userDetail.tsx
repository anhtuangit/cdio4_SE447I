import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import type { IUser } from "../dtos/getUser";

export const UserDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [users, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/users/${id}`);
                setUser(res.data.data);
            } catch (error) {
                console.error(" Lỗi khi tải chi tiết user:", error);
            }
        };
        fetchUserDetail();
    }, [id]);

    if (!users) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">Đang tải dữ liệu user...</p>
            </div>
        );
    }

    return (
        <div className="">
            <div className="mb-4 w-full">
                <button onClick={() => navigate(-1)} className="flex gap-2 items-center border-2 p-1 rounded-lg hover:bg-gray-300 hover:shadow-lg hover:shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z" clip-rule="evenodd" /></svg>
                    <p>Quay lại</p>
                </button>
            </div>
            <div className="flex max-w-5xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg shadow-gray-300">

                <div className="flex gap-3 mb-6 mr-4">
                    <img src={users.avatar_url} alt="No Avatar" className="mt-10 border-2 flex rounded-full justify-center self-start h-[100px] w-[100px]" />
                </div>
                <div className="flex-col w-full">
                    <span className="font-bold font-mono text-red-500 flex mb-4">Information</span>
                    <div className="flex-col flex w-full border-2 border-bg-gray-400 rounded-lg p-2">
                        <div className="flex w-[100%] mb-10">
                            <div className="flex flex-col w-[50%] justify-end">
                                <h1 className="text-md font-bold  text-gray-800 mb-2">Name: {users.name}</h1>
                                <h1 className="text-md font-bold text-gray-800 mb-2">Email: {users.email}</h1>
                            </div>
                            <div className="flex flex-col w-[50%]">
                                <h1 className="text-md  text-gray-800 mb-2">Role: {users.role}</h1>
                                <h1 className="text-md  text-gray-800 mb-2">Status: {users.status}</h1>
                            </div>

                        </div>
                        <div>
                            <p className="text-gray-600 mb-4">Description: {users.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

