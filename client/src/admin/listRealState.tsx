import axios from "axios";
import { useEffect, useState } from "react";
import type { IEstate } from "../dtos/getEstate";

export const ListRealState = () => {
    const [estates, setEstates] = useState<IEstate[]>([]);

    useEffect(() => {
        const fetchEstates = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/estates");
                setEstates(res.data.data || []);
            } catch (error) {
                console.error("Lỗi khi tải danh sách estate:", error);
            }
        };
        fetchEstates();
    }, []);

    return (
        <div className="flex-col w-[100%]">
            <div className="text-xl mb-2 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M21 22V7.485c0-1.098 0-1.646-.316-2.11c-.315-.463-.896-.767-2.059-1.376l-1.48-.774c-1.824-.956-2.737-1.434-3.44-1.138C13 2.383 13 3.245 13 4.967V9" /><path stroke-linecap="round" stroke-linejoin="round" d="M22 22H2M21 8h-2m2 3h-2m2 3h-2" /><path stroke-linejoin="round" d="M8 13c0-1.886 0-2.828.586-3.414S10.114 9 12 9s2.828 0 3.414.586S16 11.114 16 13v9H8z" /><path stroke-linecap="round" d="M11.5 13h1m-1 3h1" /><ellipse cx="3.5" cy="14" rx="1.5" ry="2" /><path stroke-linecap="round" d="M3.5 16v6" /></g></svg>
                <p>Danh sách bất động sản</p>
            </div>
            {estates.map((estate) => (
                <div className="flex h-[70px] border-2 m-2 rounded-lg p-2 gap-4 hover:bg-gray-200">
                    <div className="flex justify-center items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M13 2L2 7m10-4v19H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18V7m9 0l10 5" /><path d="M10 22h7c1.886 0 2.828 0 3.414-.586S21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1m8-1h1m-.5 8v-4" /></g></svg>
                    </div>
                    <div className="flex flex-col justify-center items-start w-[20%] ">
                        <span>ID: {estate._id}</span>
                        <span>From User:{estate.id_user.name}</span>
                    </div>
                    <div className="flex w-[25%] ml-6 items-center">
                        <span>
                            Loại: {estate.category === 'rental' ? 'cho thuê' : 'bán'}
                        </span>
                    </div>
                    <div className="flex w-[25%] items-center">
                        Trạng thái: {estate.status}
                    </div>
                    <div className="flex gap-2 w-[10%] ">
                        <a href={`/admin/estates/${estate._id}`} className="justify-center items-center mr-4 border-2 border-gray-300 rounded-md flex h-[40px] w-full hover:scale-105 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160" /></svg>
                            <span>Xem</span>
                        </a>

                    </div>
                </div>
            ))}
        </div>
    );
}