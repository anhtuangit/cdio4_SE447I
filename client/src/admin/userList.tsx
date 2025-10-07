import type React from "react";
import { useEffect, useState } from "react";
import type { IUser } from "../dtos/getUsers";
import axios from "axios";
import CardUser from "./cardUser";

const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        axios.get<IUser[]>("http://localhost:3000/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
            })
    }, []);


    return (
        <div className="flex-col h-full w-full">
            <div className="text-xl mb-2 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7" /></svg>

                <p>Danh sách người dùng</p>
            </div>
            {users.map((user) => (
                <div className="gap-2 flex-col m-2">
                    <CardUser key={user} loginName={user.loginName} email={user.email} role={user.role} status={user.status} dateCreate={user.dateCreate} dateUpdate={user.dateUpdate} />

                </div>))}
        </div>
    );
};
export default UserList;