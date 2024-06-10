import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

type CardProps = {
  img: string;
};
const Card3 = ({ img }: CardProps) => {
  return (
    <div className="flex flex-col bg-white mb-8 border-secondary border-2">
      <div className="p-7 space-y-5">
        <h2 className="xl:text-4xl lg:text-3xl text-2xl font-bold">
          Maintaining a seamless logistics flow.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          className="flex items-center gap-2 font-black text-primary"
          to="readMore"
        >
          Read <HiOutlineArrowLongRight size={24} />
        </Link>
        <img src={img} alt="Card Image" />
      </div>
    </div>
  );
};

export default Card3;
