import Section from "../components/Section";

//icons
import { GoArrowRight } from "react-icons/go";

//images
import heroBanner from "../assets/images/heroBanner.png";
import transportation from "../assets/images/transportation.png";
import carrier from "../assets/images/carrier.png";
import logoGrey from "../assets/images/logoGrey.png";
import equipementFac from "../assets/images/equipementFac.png";
import companyCulture from "../assets/images/companyCulture.png";
import driveWith from "../assets/images/driveWith.png";

import cardImage1 from "../assets/images/cardImg1.png";
import cardImage2 from "../assets/images/cardImg2.png";
import cardImage3 from "../assets/images/cardImg3.png";
import cardImage4 from "../assets/images/cardImg4.png";
import cardImage5 from "../assets/images/cardImg5.png";
import cardImage6 from "../assets/images/cardImg6.png";

//components
import ButtonOutlined from "../components/ui/ButtonOutlined";
import ButtonFilled from "../components/ui/ButtonFilled";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div
        className="md:h-[800px] xs:h-[820px] h-[820px] bg-no-repeat bg-cover bg-center lg:pt-0 pt-28 md:-mb-32 -mb-28"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <Section>
          <div className="lg:px-40 sm:px-28 xs:px-14 px-10 pt-40">
            <h2 className="text-white lg:text-8xl sm:text-6xl text-5xl font-bold leading-none">
              Fast. Free.
              <br />
              Forward.
            </h2>
            <p className="text-white pt-5 pb-5">
              Freedom Forwarder offers easy solutions to your logistics needs.
              <br />
              There’s no need to think, we can do the forward-thinking for you.
            </p>
            <div className="flex md:flex-row flex-col md:w-auto w-3/4 gap-5 pt-3">
              <ButtonOutlined>Explore More</ButtonOutlined>
              <ButtonFilled>Book a Schedule</ButtonFilled>
            </div>
          </div>
        </Section>
      </div>

      {/* Services */}

      <Section>
        <div className="flex lg:flex-row flex-col gap-7 px-5">
          <div
            className="lg:w-1/2 w-full bg-no-repeat bg-100 lg:bg-top bg-center p-8"
            style={{ backgroundImage: `url(${transportation})` }}
          >
            <div className="flex flex-col xl:h-[600px] sm:h-[500px] xs:h-[360px] h-[320px] justify-between text-white">
              <h2 className="md:text-4xl text-3xl font-bold w-1/2">
                Transportation Solutions
              </h2>
              <div className="flex md:flex-row flex-col justify-between md:items-center">
                <p className="md:w-3/4">
                  With our land transportation options, we’ve got the variety to
                  keep up with your every need. From large shipping containers
                  to fabricated metal parts, we make sure that your cargo, no
                  matter what the size, is delivered straight to you safe &
                  sound.
                </p>
                <GoArrowRight className="h-9 w-9" />
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full bg-no-repeat bg-100 lg:bg-top bg-center p-8"
            style={{ backgroundImage: `url(${carrier})` }}
          >
            <div className="flex flex-col xl:h-[600px] md:h-[500px] xs:h-[360px] h-[320px] justify-between text-white">
              <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold lg:w-1/2 w-1/3">
                Carrier Solutions
              </h2>
              <div className="flex md:flex-row flex-col justify-between md:items-center">
                <p className="md:w-3/4">
                  With our ever-evolving network of freight connections and
                  options, we guarantee that you can get the best value for
                  money and that the highest standards are met.
                </p>
                <GoArrowRight className="h-9 w-9" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* equipment & facilities */}
      <Section>
        <div className="flex lg:flex-row flex-col lg:gap-7 gap-5 px-5 lg:pt-40 pt-16 lg:pb-40 pb-20">
          <div
            className="lg:w-1/2 w-full bg-no-repeat bg-auto bg-left-top space-y-10"
            style={{ backgroundImage: `url(${logoGrey})` }}
          >
            <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold pt-24">
              Equipment & Facilities
            </h2>
            <p className="md:w-3/4 w-full">
              Our reliability and efficiency are backed by a vast array of
              equipment of the highest quality in facilities equipped with the
              latest technology to ensure that we securely haul your cargo.
            </p>
            <ButtonFilled>Explore More</ButtonFilled>
          </div>
          <div className="lg:w-1/2 w-full">
            <img
              className="bg-fill bg-center lg:-mt-[10%] lg:-ml-[20%]"
              src={equipementFac}
            />
          </div>
        </div>
      </Section>

      {/* company culture */}
      <div
        className="md:h-[700px] xs:h-[720px] h-[720px] bg-no-repeat bg-cover md:bg-center bg-right-top lg:pt-32 pt-28"
        style={{ backgroundImage: `url(${companyCulture})` }}
      >
        <Section>
          <div className="flex justify-end">
            <div className="flex flex-col items-start lg:w-1/2 md:w-4/6 xl:pl-16 lg:pl-10 sm:pl-5 pl-5 xl:pr-28 lg:pr-20 sm:pr-32 pr-12 gap-4">
              <h2 className="text-black xl:text-5xl lg:text-4xl text-3xl font-bold leading-none">
                Company Culture
              </h2>
              <p className="text-black pt-5 pb-5">
                At Freedom Forwarder, our employees are our priority just as
                much as the customers are.. Behind the wheels of our trucks are
                trustworthy and efficient, ensuring the safety and quality of
                our services. A forward-thinking team is key to achieving the
                success that we strive for!
              </p>
              <ButtonFilled>Explore More</ButtonFilled>
            </div>
          </div>
        </Section>
      </div>

      {/* news */}
      <div className="bg-[#f5f5f5]/50">
        <Section>
          <div className="flex flex-col justify-center lg:gap-7 gap-5 px-5 xl:pt-24 lg:pt-20 pt-12 lg:pb-36 pb-20">
            <div
              className="bg-no-repeat bg-contain bg-center pb-4"
              style={{ backgroundImage: `url(${logoGrey})` }}
            >
              <h2 className="xl:text-5xl lg:text-4xl text-3xl text-center font-bold pt-20">
                News
              </h2>
            </div>
            <div className="xl:columns-3 md:columns-2xs columns-1 gap-8">
              <Card1 img={cardImage1} />
              <Card3 img={cardImage2} />
              <Card2 />
              <Card2 />
              <Card1 img={cardImage4} />
              <Card1 img={cardImage5} />
              <Card3 img={cardImage3} />
              <Card2 />
              <Card1 img={cardImage6} />
            </div>
          </div>
        </Section>
      </div>

      {/* drive with us */}
      <div className="flex lg:flex-row flex-col md:gap-7 gap-4 px-5">
        <div className="lg:w-1/3 w-full">
          <img
            className="h-full object-cover"
            src={driveWith}
            alt="Drive with Us"
          />
        </div>
        <div className="lg:w-2/3 w-full p-8 pt-14 md:space-y-5 space-y-3">
          <div
            className="bg-no-repeat bg-contain bg-left pb-4"
            style={{ backgroundImage: `url(${logoGrey})` }}
          >
            <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold pt-20 md:pl-5">
              Drive With Us
            </h2>
          </div>
          <p className="md:w-1/2 w-full md:pl-5">
            Looking to become a member of our team? Check here for more details
            on career opportunities and how to further them with Freedom
            Forwarder.
          </p>
          <div className="md:pl-5 pt-4">
            <ButtonFilled>Explore More</ButtonFilled>
          </div>
          <div className="flex md:flex-row flex-col md:gap-14 gap-6 md:pl-5 pt-5 justify-start md:items-center items-start">
            <div className="md:text-center space-y-1">
              <h2 className="md:text-3xl text-2xl font-black">$75,000</h2>
              <h3 className="md:text-xl text-lg text-[#C0C0C0]">AVG. PAY</h3>
            </div>
            <div className="md:text-center space-y-1">
              <h2 className="md:text-3xl text-2xl font-black">$87,000+</h2>
              <h3 className="md:text-xl text-lg text-[#C0C0C0]">
                TOP 20% EARN
              </h3>
            </div>
            <div className="md:text-center space-y-1">
              <h2 className="md:text-3xl text-2xl font-black">
                3-4 DAY
                <br />
                WEEKEND
              </h2>
              <h3 className="md:text-xl text-lg text-[#C0C0C0]">ENJOY</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
