import { Link } from "react-router-dom";
import ButtonFilled from "../components/ui/ButtonFilled";

const Error = () => {
  return (
    <div className="flex flex-col gap-5 h-screen justify-center items-center">
      <h1 className="text-3xl">Error 404. Page not found.</h1>
      <Link to="/">
        <ButtonFilled>Back to Home</ButtonFilled>
      </Link>
    </div>
  );
};

export default Error;
