import CardState from "../components/cardEstate";




const data = [
    {}
]
const EstateDetail = () => {
    return (
        <div className="h-[100%] w-full flex border-2 bg-red-300">
            <div>
                {data.map((index, item) => (
                    <CardState />
                ))}
            </div>
        </div>
    );
}

export default EstateDetail;