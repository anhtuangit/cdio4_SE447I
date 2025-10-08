import { useEffect, useState } from "react";
import Button from "./button"
import type { ICardEstate } from "../dtos/getEstateCard";
import axios from "axios";
import type { IEstate } from "../dtos/getEstate";




const CardState = () => {
    const [estate, setEstate] = useState<ICardEstate[]>([])
    useEffect(() => {
        axios.get<IEstate[]>("http://localhost:3000/estates")
            .then((res) => {
                setEstate(res.data)
            }).catch((err) => {
                console.error("Error fetching estate:", err)
            });
    }, [])

    return (
        <div className=" gap-2 h-[600px] border m-2 p-2 rounded-lg bg-slate-300 hover:shadow-md hover:shadow-yellow-400 flex-col">
            {estate.map((estates) => (
                <div className="gap-2 flex-col m-2">
                    {estates.title} {estates.price} {estates.type} {estates.address}

                </div>))}
        </div>
    );
}

export default CardState;