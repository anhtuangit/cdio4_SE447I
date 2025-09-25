import Button from "./button"

type card = {
    img: string
    describe: string
    price: number
    location: string
}
function truncateText(text: string, limit: number): string {
    return text.length > limit ? text.slice(0, limit) + "..." : text
}

const CardState = ({ img, describe, price, location }: card) => {

    return (
        <div className=" gap-2 max-h-full border m-2 p-2 rounded-lg bg-slate-300 hover:shadow-md hover:shadow-yellow-400 flex-col">
            <div className="border-2 border-yellow-400 mb-2 p-2 items-center justify-center flex">
                <img src={img} alt="No Data Picture" />
            </div>
            <div className="h-[300px] p-2 items-center justify-center flex-col border-blue-500 border-2 rounded-lg">
                <div className="justify-center flex">
                    <p className=" text-lime-600 text-lg mb-4 font-semibold">{truncateText(describe, 60)}</p>
                </div>
                <div className="p-2 ">
                    <span className="">Giá : </span>
                    {price}
                    <span> Tr</span>
                </div>
                <div className="line-clamp-2 p-2 text-red-500">
                    <span>Vị trí :</span>
                    {location}
                </div>
                <div className="items-end justify-end flex m-4">
                    <Button svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ff0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13M5 3L4 2m0 5H3m11-4l1-1m0 4h1" /></g></svg>}
                        name={'Xem chi tiết'} />
                </div>
            </div>
        </div>
    );
}

export default CardState;