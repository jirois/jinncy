import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import SubHeading from "../components/SubHeading";
import WebIcon from "../components/Icons/WebIcon";
import WinIcon from "../components/Icons/WinIcon";
import LusIcon from "../components/Icons/LusIcon";
import ProductIcon from "../components/Icons/ProductIcon";
import UiIcon from "../components/Icons/UiIcon";
import MobileIcon from "../components/Icons/MobileIcon";

const Services = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="our services" className="py-24">
      {/* HEADER SECTION */}
      <div>
        {isAboveMediumScreens ? (
          <motion.div
            className="flex flex-col gap-[46px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SubHeading text="WHAT WE DO" />
            <h2 className="text-5xl font-opensans font-semibold flex-wrap w-[90%] ">
              We have what it takes to digitized your business and bring it up
              to speed with the revolution
            </h2>
            <p className="text-2xl font-roboto">
              We have what it takes to bring you experience we promised. Our
              dedicated team are on ground to make it happen. We give you the
              total package, with the end goal of delivering a product which is
              market worthy.{" "}
            </p>
          </motion.div>
        ) : (
          <div>
            <motion.div
              className="flex flex-col gap-[36px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SubHeading text="WHO WE ARE" />
              <h2 className="text-4xl font-opensans font-semibold ">
                We have what it takes to digitized your business and bring it up
                to speed with the revolution
              </h2>
              <p className="text-1xl font-roboto">
                We have what it takes to bring you experience we promised. Our
                dedicated team are on ground to make it happen. We give you the
                total package, with the end goal of delivering a product which
                is market worthy.{" "}
              </p>
            </motion.div>
          </div>
        )}
      </div>
      {/* THE BODY SECTION */}
      <div className="mt-[46px]">
        {/* The First section */}
        <div className="flex flex-col md:justify-between md:flex-row gap-10 mb-16 ">
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <WinIcon />
            </div>
            <h4 className="font-bold text-2xl">Brand Identity</h4>
            <p className="text-text-grey text-[18px]">
              This includes visual and messaging aspects that represent your
              business and we help it stand out from competition. This
              encompasses your business's name, logo, typography, color palette,
              imagery, tone of voice, and overall design aesthetic.
            </p>
          </motion.div>
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <LusIcon />
            </div>
            <h4 className="font-bold text-2xl">Illustration</h4>
            <p className="text-text-grey text-[18px]">
              We create illustration for your business to help to convey an
              idea, message, or story behind your business.We use Illustration
              because we considered it a strong communication tool which convey
              complicated concepts and emotions in a simple and understandable
              manner about a business.
            </p>
          </motion.div>
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <WebIcon />
            </div>
            <h4 className="font-bold text-2xl">Web Design</h4>
            <p className="text-text-grey text-[18px]">
              We pride ourself at creating web sites that are visually
              beautiful, user-friendly, and accessible on a wide range of
              devices and screen sizes. Our web design are also consistent with
              the brand identity and messaging of the business we promote.
            </p>
          </motion.div>
        </div>
        {/* The Second Section */}
        <div className="flex flex-col md:justify-between md:flex-row gap-14">
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <ProductIcon />
            </div>
            <h4 className="font-bold text-2xl">Product Strategy</h4>
            <p className="text-text-grey text-[18px]">
              A solid product strategy is critical for creating a successful
              product that fits consumer wants, matches with business goals, and
              stands out in a crowded market. It helps us get a thorough
              understanding of the target demographic, market trends.
            </p>
          </motion.div>
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <UiIcon />
            </div>
            <h4 className="font-bold text-2xl">UI/UX Design</h4>
            <p className="text-text-grey text-[18px]">
              The aesthetic and interactive features of a product we are working
              on is the major reason for the emphasis of UI design. Both the UI
              and UX are important to the success of the product we develop. The
              ui of your business website as well as the ux is very important.
            </p>
          </motion.div>
          <motion.div
            className=" flex flex-col gap-[30px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 text-orange">
              <MobileIcon />
            </div>
            <h4 className="font-bold text-2xl">Mobile Development</h4>
            <p className="text-text-grey text-[18px]">
              We develop software applications for mobile devices such as
              smartphones and tablets. Our mobile applications also follow the
              device principles of solid software development used by jinncy inc
              and other software companies around the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
