import React from "react";
import SubHeading from "../components/SubHeading";
import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";
import InputButton from "../components/InputButton";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <footer id="contact us" className="pt-12 pb-6 md:pt-24 md:pb-12">
      <div className="flex flex-col gap-14 md:gap-20">
        {isAboveMediumScreen ? (
          <div className="text-white">
            <SubHeading text="WHERE WE ARE" />
            <h2 className=" text-3xl md:text-5xl font-opensans font-semibold md:flex-wrap md:w-[90%] ">
              Get in touch with the digital team, let’s build something greater
              from that your idea.
            </h2>
          </div>
        ) : (
          <div>
            <SubHeading text="WHERE WE ARE" />
            <h2 className=" text-3xl font-opensans font-semibold flex-wrap  text-white">
              Get in touch with the digital team, let’s build something greater
              from that your idea.
            </h2>
          </div>
        )}
        <div className="text-white mt-10">
          <LineGradient width="w-12" />
          <div className="mt-4">
            <p className="text-2xl md:text-4xl">contact@jinncyinc.com</p>
            <p className="text-pale-grey text-xl">
              +2347066870274/+2348034906770
            </p>
          </div>
        </div>
        {isAboveMediumScreen ? (
          <div className="flex flex-col items-center gap-24 md:flex-row md:justify-between md:gap-44">
            <div className="md:basis-2/5 gap-8 flex flex-col order-1">
              <SubHeading text="Where To Find Us" />
              <p className="text-2xl md:text-3xl text-light-grey">
                No 113 IBB High Road Drive, Calabar, Cross River State, Nigeria
              </p>
            </div>
            <div className="md:basis-3/5 order-2 mr-auto">
              <SubHeading text="Follow Us" />
              <SocialMediaIcons mobilePos="justify-start" />
              <InputButton />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-24 ">
            <div className=" gap-8 flex flex-col order-2 ">
              <SubHeading text="Where To Find Us" />
              <p className="text-xl text-light-grey">
                No 113 IBB High Road Drive, Calabar, Cross River State, Nigeria
              </p>
            </div>
            <div className=" w-full order-1 mt-10">
              <SubHeading text="Follow Us" />
              <SocialMediaIcons mobilePos="justify-start" />
              <InputButton />
            </div>
          </div>
        )}
        {isAboveMediumScreen ? (
          <p className="text-xl md:text-[28px] text-white">
            copyright @{new Date().getFullYear()} all rights reserved | Jinncy
            Inc
          </p>
        ) : (
          <p className="text-xl p-2 text-white w-full">
            copyright @{new Date().getFullYear()} all rights reserved | Jinncy
            Inc
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
