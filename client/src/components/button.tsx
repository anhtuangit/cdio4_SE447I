import { Link } from "react-router-dom";

type cardButton = {
  svg: React.ReactNode;
  name: string;
  to: string;   // 👈 thêm prop "to" để chỉ đường dẫn
};

const Button = ({ svg, name, to }: cardButton) => {
  return (
    <div className="flex w-full h-[40px] justify-center items-center">
      <Link
        to={to}
        className="w-full h-full active:scale-95 hover:scale-105 justify-center items-center flex gap-2 border-2 rounded-xl hover:shadow-blue-400 hover:shadow-md hover:bg-sky-500 bg-sky-300 transition"
      >
        {svg}
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default Button;
