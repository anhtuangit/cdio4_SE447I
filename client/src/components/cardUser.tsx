import type { IUser } from "../dtos/getUsers";
import img from "../../public/avataradm.jpg"

const CardUser = ({ loginName, email, role, status, dateCreate, dateUpdate }: IUser) => {

    return (
        <div className="flex h-24 w-[100%] rounded-lg border-2 mt-4 self-start">
            <img className="ml-4 border-[8px] border-gray-400 rounded-full justify-start items-center flex " src={img} alt="No picture" />
            <a className="flex flex-col h-full w-[30%] ml-4 pt-4">
                <span>Name: {loginName}</span>
                <span>Email: {email}</span>
            </a>

            <a className="flex flex-col h-full w-[30%] ml-4 pt-4">
                <span>Role: {role}</span>
                <span>Status: {status}</span>
            </a>

            <a className="flex flex-col h-full w-[30%] ml-4 pt-4">
                <span>Create: {dateCreate}</span>
                <span>Update: {dateUpdate}</span>
            </a>
        </div>
    );
}

export default CardUser;