import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Card2 = () => {
  return (
    <div className="flex flex-col bg-secondary mb-8">
      <div className="p-7 space-y-5  text-white">
        <h2 className="xl:text-4xl lg:text-3xl text-2xl font-bold">
          Maintaining a seamless logistics flow.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          className="flex items-center gap-2 font-black text-white"
          to="readMore"
        >
          Read <HiOutlineArrowLongRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Card2;
