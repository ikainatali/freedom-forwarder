import PageLayout from "../components/PageLayout";
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

//components
import ButtonOutlined from "../components/ui/ButtonOutlined";
import ButtonFilled from "../components/ui/ButtonFilled";

const Home = () => {
  return (
    <>
      <PageLayout>
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
                There’s no need to think, we can do the forward-thinking for
                you.
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
                    With our land transportation options, we’ve got the variety
                    to keep up with your every need. From large shipping
                    containers to fabricated metal parts, we make sure that your
                    cargo, no matter what the size, is delivered straight to you
                    safe & sound.
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
                <h2 className="md:text-4xl text-3xl font-bold lg:w-1/2 w-1/3">
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
              className="lg:w-1/2 w-full bg-no-repeat bg-auto lg:bg-left-top space-y-10"
              style={{ backgroundImage: `url(${logoGrey})` }}
            >
              <h2 className="lg:text-5xl text-3xl font-bold pt-24">
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
          className="md:h-[800px] xs:h-[820px] h-[820px] bg-no-repeat bg-cover bg-center lg:pt-0 pt-28 md:-mb-32 -mb-28"
          style={{ backgroundImage: `url(${companyCulture})` }}
        >
          <Section>
            <div className="flex flex-col items-end ">
              <div className="w-1/2 lg:px-40 sm:px-28 xs:px-14 px-10 pt-40 space-y-4">
                <h2 className="text-black lg:text-5xl sm:text-6xl text-5xl font-bold leading-none">
                  Company Culture
                </h2>
                <p className="text-black pt-5 pb-5">
                  At Freedom Forwarder, our employees are our priority just as
                  much as the customers are.. Behind the wheels of our trucks
                  are trustworthy and efficient, ensuring the safety and quality
                  of our services. A forward-thinking team is key to achieving
                  the success that we strive for!
                </p>

                <ButtonFilled>Explore More</ButtonFilled>
              </div>
            </div>
          </Section>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
