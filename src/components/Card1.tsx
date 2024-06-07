import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

type CardProps = {
  img: string;
};
const Card1 = ({ img }: CardProps) => {
  return (
    <div className="flex flex-col bg-white">
      <img src={img} alt="Card Image" />
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
          Read More <HiOutlineArrowLongRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Card1;
