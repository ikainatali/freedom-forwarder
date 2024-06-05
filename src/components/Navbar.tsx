import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//images
import logo from "../assets/images/logo.png";
import flyoutImg1 from "../assets/images/flyoutImg1.png";
import flyoutImg2 from "../assets/images/flyoutImg2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-transparent lg:-mb-24 -mb-52">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
              <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
              >
                <svg
                  className={`fill-current h-3 w-3 ${
                    isOpen ? "hidden" : "block"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                  className={`fill-current h-3 w-3 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div
              className={`w-full lg:flex lg:items-center lg:w-auto ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex justify-end flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-3 text-white lg:pt-0 pt-5">
                <FlyoutLink href="#" FlyoutContent={WhyChooseUs}>
                  Why Choose Us
                  <span className="lg:hidden block mx-[4.2rem]">{"  "}</span>
                </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={Solutions}>
                  Solutions
                  <span className="lg:hidden block mx-[4.2rem]">{"  "}</span>
                </FlyoutLink>
                <Link to="#" className="block lg:inline-block text-white-200">
                  Drive With Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

type FlyoutProps = {
  href: string;
  FlyoutContent: React.ComponentType;
  children: React.ReactNode;
};

const FlyoutLink = ({ children, href, FlyoutContent }: FlyoutProps) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-white block lg:inline-block">
        {children}
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-78%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute lg:left-1/2 left-full top-10 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-4 bg-transparent" />
            <div className="absolute lg:left-[79%] left-12 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="flex lg:w-[440px] w-[200px] bg-white shadow-xl">
      <img
        className="object-cover lg:h-64 lg:w-64 lg:block hidden"
        src={flyoutImg1}
        alt=""
      />
      <div className="space-y-2 p-6">
        <h3 className="font-bold">Transportation</h3>
        <a href="#" className="block text-sm hover:underline">
          Flatbed Division
        </a>
        <a href="#" className="block text-sm hover:underline">
          Intermodal Division
        </a>
        <a href="#" className="block text-sm hover:underline">
          Load Tracing
        </a>
        <h3 className="font-bold pt-3">Carrier</h3>
        <a href="#" className="block text-sm hover:underline">
          Brokerage
        </a>
        <a href="#" className="block text-sm hover:underline">
          Powerfleet
        </a>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="flex lg:w-[440px] w-[200px] bg-white shadow-xl">
      <img
        className="object-cover lg:h-64 lg:w-64 lg:block hidden"
        src={flyoutImg2}
        alt=""
      />
      <div className="space-y-2 p-6">
        <h3 className="font-bold">Why Choose Us</h3>
        <a href="#" className="block text-sm hover:underline">
          Company Culture
        </a>
        <a href="#" className="block text-sm hover:underline">
          Leadership Team
        </a>
        <a href="#" className="block text-sm hover:underline">
          Equipment Facilities
        </a>
        <a href="#" className="block text-sm hover:underline">
          Fleet Maintenance
        </a>
      </div>
    </div>
  );
};

export default Navbar;
