import type React from "react";
import { useEffect, useState } from "react";
import type { IUser } from "../dtos/getUsers";
import axios from "axios";

const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<IUser[]>("http://localhost:3000/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Đang tải...</p>;

    return (
        <div>
            <h2>Danh sách Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;