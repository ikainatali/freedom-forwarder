import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ButtonOutlined from "./ui/ButtonOutlined";
import { Link } from "react-router-dom";

//images
import logoRed from "../assets/images/logoRed.png";

const Footer = () => {
  const moreInformation = [
    {
      link: "Company culture",
      path: "#",
    },
    {
      link: "Leadership team",
      path: "#",
    },
    {
      link: "Equipment & facilities",
      path: "#",
    },
    {
      link: "Fleet maintenance",
      path: "#",
    },
    {
      link: "News",
      path: "#",
    },
  ];
  const ourServices = [
    {
      link: "Transportation solutions",
      path: "#",
    },
    {
      link: "Load Tracker",
      path: "#",
    },
    {
      link: "Carrier solutions",
      path: "#",
    },
  ];
  const otherLinks = [
    {
      link: "Drive with us",
      path: "#",
    },
    {
      link: "Submit pics from the road",
      path: "#",
    },
    {
      link: "Equipment & Facilities",
      path: "#",
    },
    {
      link: "Driver verfications",
      path: "#",
    },
  ];
  return (
    <div
      className="bg-primary bg-no-repeat bg-auto md:bg-right-bottom bg-bottom"
      style={{ backgroundImage: `url(${logoRed})` }}
    >
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <h2 className="text-white text-center lg:text-7xl text-4xl font-bold leading-tight">
            Need to transport something?
            <br />
            We got you!
          </h2>
          <ButtonOutlined>Book a Schedule</ButtonOutlined>
          <hr className="border-white w-full lg:mt-24 md:mt-20 mt-12 pb-10" />
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2">
            <div className="space-y-4">
              <div className="social-icons flex flex-row gap-5">
                <FaFacebook className="fill-white w-6 h-6" />
                <FaInstagram className="fill-white w-6 h-6" />
                <FaLinkedin className="fill-white w-6 h-6" />
              </div>
              <h2 className="text-white md:text-xl text-[1.05rem] font-bold leading-normal xl:w-[70%] lg:w-[82%] md:w-[60%] w-11/12">
                2740 North Mayfair, Springfield, MO 65803{" "}
                <span className="">0999-000-9999 | 000-9999</span>
              </h2>
              <h2 className="text-white md:text-xl text-[1.05rem] font-bold leading-normal md:w-3/5 w-11/12 pt-2">
                © 2022 Freedom Forwarder. All Rights Reserved.
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 flex md:flex-row flex-col md:gap-2 gap-7 lg:pt-0 pt-6">
            <div className="md:w-1/3">
              <h2 className="text-white md:text-lg text-[1.05rem] font-bold leading-normal w-3/5 md:pb-4 pb-2">
                More Information
              </h2>
              <ul>
                {moreInformation.map((navlinks) => (
                  <li className="text-white py-1 md:text-base text-sm  underline capitalize">
                    <Link key={navlinks.link} to={navlinks.path}>
                      {navlinks.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <h2 className="text-white md:text-lg text-[1.05rem] font-bold leading-normal w-3/5 md:pb-4 pb-2 ">
                Our Services
              </h2>
              <ul>
                {ourServices.map((navlinks) => (
                  <li className="text-white py-1 md:text-base text-sm  underline capitalize">
                    <Link key={navlinks.link} to={navlinks.path}>
                      {navlinks.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <h2 className="text-white md:text-lg text-[1.05rem] font-bold leading-normal w-3/5 md:pb-4 pb-2">
                Other Links
              </h2>
              <ul>
                {otherLinks.map((navlinks) => (
                  <li className="text-white py-1 md:text-base text-sm underline capitalize">
                    <Link key={navlinks.link} to={navlinks.path}>
                      {navlinks.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
