import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren;

const ButtonOutlined = ({ children }: ButtonProps) => {
  return (
    <button className="border-2 border-white rounded-full md:px-10 px-6 py-4 text-white">
      {children}
    </button>
  );
};

export default ButtonOutlined;
