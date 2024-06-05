import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
