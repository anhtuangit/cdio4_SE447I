import type { IUser } from "../dtos/getUsers";

const CardUser = ({ nameLogin, role, status }: IUser) => {
    return (
        <div className="flex items-center justify-between w-full border rounded-lg p-3 shadow-sm bg-white">
            <div className="flex items-center space-x-3">
                <img
                    src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg"
                    alt="avatar"
                    className="w-10 h-10 rounded-full border object-cover"
                />
                <div>
                    <p className="text-sm font-medium">{nameLogin}</p>
                    <p className="text-xs text-gray-500">Đăng nhập vào: {role}</p>
                </div>

            </div>
            <div className="justify-start items-center flex w-[20%]">
                <p className={status === "unlock" ? "text-green-500" : "text-red-500"}>
                </p>
            </div>
            <div className="flex space-x-4 w-[20%]">
                <button className="flex items-center justify-center px-3 py-1 text-sm border rounded-lg hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934Z" /></g></svg>
                    Xem
                </button>
                <button className="flex items-center px-3 py-1 text-sm border rounded-lg hover:bg-gray-100 w-[50%]">
                    {status === "unlock" ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M6 8a6 6 0 1 1 12 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm6-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m2 10a2 2 0 0 1-1 1.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12a2 2 0 0 1 2 2" /></g></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"><defs><mask id="SVG0otHQdzY"><g fill="none" stroke-linejoin="round" stroke-width="4"><rect width="34" height="22" x="7" y="22.048" fill="#fff" stroke="#fff" rx="2" /><path stroke="#fff" stroke-linecap="round" d="M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006" /><path stroke="#000" stroke-linecap="round" d="M24 30v6" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVG0otHQdzY)" /></svg>
                    }
                    {status === "unlock" ? "khóa" : "Mở Khóa"}
                </button>
            </div>
        </div>
    );
};

export default CardUser;
