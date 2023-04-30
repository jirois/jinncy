import React from "react";
import SubHeading from "../components/SubHeading";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const AboutUs = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  console.log(isAboveMediumScreens);
  return (
    <section id="about us" className="py-24">
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
            <SubHeading text="WHO WE ARE" />
            <h2 className="text-5xl font-opensans font-semibold flex-wrap w-[90%] ">
              We have what it takes to digitized your business and bring it up
              to speed with the revolution
            </h2>
            <p className="text-2xl font-roboto">
              Jinncy Inc is a tech driven company. We are into design, branding,
              building, and launching of products. We convert abstract ideas
              into finish fully functional products that meet market standards.
              Our major focus is in revolutionizing the way products are design
              as we as the turn around time for deployment. At Jinncy Inc, we
              are a family of innovations and standardization. Talk to us at
              Jinncy today!{" "}
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
              <h2 className="text-4xl font-opensans font-semibold flex-wrap  ">
                we are a group of digitization driven individuals who are
                enthusiastic about creating awesome online experience.
              </h2>
              <p className="text-1xl font-roboto">
                Jinncy Inc is a tech driven company. We are into design,
                branding, building, and launching of products. We convert
                abstract ideas into finish fully functional products that meet
                market standards. Our major focus is in revolutionizing the way
                products are design as we as the turn around time for
                deployment. At Jinncy Inc, we are a family of innovations and
                standardization. Talk to us at Jinncy today!{" "}
              </p>
            </motion.div>
          </div>
        )}
      </div>
      {/* BODY SECTION */}
      <div className="mt-[46px]">
        {/* First */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between">
            <motion.div
              className="basis-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-10 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">1</span>
                </div>
                <h4 className="font-bold text-3xl">Define</h4>
              </div>
              <div className="px-[4.5rem] pt-4 border-l-2 ml-6 mt-1">
                <p className="text-[16px]  ">
                  We define and identify the purpose and objectives of your
                  website to direct its design and content. This means choosing
                  a relevant and memorable domain name for your website as well
                  selecting a befiting hosting plan for your need.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="basis-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-10 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue  text-center">
                  <span className="text-xl text-white font-bold py-3">2</span>
                </div>
                <h4 className="font-bold  text-3xl">Design</h4>
              </div>
              <div className="px-[4.5rem] pt-4 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We design a layout and outlook for your website that is
                  appropriate for its goals and the tastes of its target
                  audience. In designing your website we take into consideration
                  the use case and purpose and then tailor the design to suit
                  the purpose of the site. We are very intentional about giving
                  your website the best look both in desktop and mobile view.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          // Mobile Section of First Section
          <div className="flex flex-col">
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue  text-center">
                  <span className="text-xl text-white font-bold py-3">1</span>
                </div>
                <h4 className="font-bold  text-2xl">Define</h4>
              </div>
              <div className="px-[1.5rem] pt-1 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We define and identify the purpose and objectives of your
                  website to direct its design and content. This means choosing
                  a relevant and memorable domain name for your website as well
                  selecting a befiting hosting plan for your need.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">2</span>
                </div>
                <h4 className="font-bold  text-2xl">Design</h4>
              </div>
              <div className="px-[1.5rem] pt-1 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We design a layout and outlook for your website that is
                  appropriate for its goals and the tastes of its target
                  audience. In designing your website we take into consideration
                  the use case and purpose and then tailor the design to suit
                  the purpose of the site. We are very intentional about giving
                  your website the best look both in desktop and mobile view.
                </p>
              </div>
            </motion.div>
          </div>
        )}
        {/* second */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between mt-6">
            <motion.div
              className="basis-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-10 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">3</span>
                </div>
                <h4 className="font-bold text-3xl">Build</h4>
              </div>
              <div className="px-[4.5rem] pt-4 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We implement our designs and put the site to use. Part of the
                  building process is testing the site to ensure, the site is
                  working perfectly across the different devices. We create an
                  online identity for your business and help you spread your
                  across the internet. We build online visibility for your
                  business
                </p>
              </div>
            </motion.div>
            <motion.div
              className="basis-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-10 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">4</span>
                </div>
                <h4 className="font-bold  text-3xl">Launch</h4>
              </div>
              <div className="px-[4.5rem] pt-4 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We publish the website and spread the word about it through
                  various marketing channels. As part of our effort to making
                  sure your business continue to gain visibility we update the
                  site with new material, security upgrades, and bug fixes.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          // Mobile Section of Second Section
          <div className="flex flex-col">
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">3</span>
                </div>
                <h4 className="font-bold  text-2xl">Build</h4>
              </div>
              <div className="px-[1.5rem] pt-1 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We implement our designs and put the site to use. Part of the
                  building process is testing the site to ensure, the site is
                  working perfectly across the different devices. We create an
                  online identity for your business and help you spread your
                  across the internet. We build online visibility for your
                  business
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full  flex items-center px-4 py-4 bg-gradient-rainblue text-center">
                  <span className="text-xl text-white font-bold py-3">4</span>
                </div>
                <h4 className="font-bold  text-2xl">Launch</h4>
              </div>
              <div className="px-[1.5rem] pt-1 border-l-2 ml-6 mt-1">
                <p className="text-[16px] ">
                  We publish the website and spread the word about it through
                  various marketing channels. As part of our effort to making
                  sure your business continue to gain visibility we update the
                  site with new material, security upgrades, and bug fixes.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
