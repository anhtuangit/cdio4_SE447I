import type { IUser } from "../dtos/getUsers";
import img from "../../public/avataradm.jpg";

const CardUser = ({ email, dateUpdate, status }: IUser) => {
    return (
        <div className="flex items-center justify-between w-full border rounded-lg p-3 shadow-sm bg-white">
            {/* Avatar + Thông tin */}
            <div className="flex items-center space-x-3">
                <img
                    src={img}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border object-cover"
                />
                <div>
                    <p className="text-sm font-medium">{email}</p>
                    <p className="text-xs text-gray-500">Đăng nhập vào: {dateUpdate}</p>
                </div>
            </div>

            {/* Các nút chức năng */}
            <div className="flex space-x-2">
                <button className="flex items-center px-3 py-1 text-sm border rounded-lg hover:bg-gray-100">
                    👁 Xem
                </button>
                <button className="flex items-center px-3 py-1 text-sm border rounded-lg hover:bg-gray-100">
                    🔒 Vô hiệu hóa
                </button>
            </div>
        </div>
    );
};

export default CardUser;
