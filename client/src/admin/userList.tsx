import type React from "react";
import { useEffect, useState } from "react";
import type { IUser } from "../dtos/getUsers";
import axios from "axios";
import CardUser from "../components/cardUser";

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
        <div className="flex-col h-full w-full bg-sky-200 p-4">
            {users.map((user) => (
                <CardUser key={user} loginName={user.loginName} email={user.email} role={user.role} status={user.status} dateCreate={user.dateCreate} dateUpdate={user.dateUpdate} />
            ))}
        </div>
    );
};
export default UserList;