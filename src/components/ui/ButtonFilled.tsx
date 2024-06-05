import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren;

const ButtonFilled = ({ children }: ButtonProps) => {
  return (
    <button className="border-2 border-primary bg-primary rounded-full md:px-10 px-6 py-4 text-white">
      {children}
    </button>
  );
};

export default ButtonFilled;
