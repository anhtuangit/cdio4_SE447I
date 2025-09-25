type cardButton = {
    svg: React.ReactNode
    name: string
}

const Button = ({ svg, name }: cardButton) => {
    return (
        <div className=" flex w-full h-[40px] justify-center items-center ">
            <a href="" className="w-full h-full active:scale-95 hover:scale-105 justify-center items-center flex gap-2 border-2 rounded-xl hover:shadow-blue-400 hover:shadow-md hover:bg-sky-500 bg-sky-300">
                {svg}
                <p>{name}</p>
            </a>
        </div>
    );
}

export default Button;

