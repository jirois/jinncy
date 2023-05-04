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
              We are a group of committed individuals that are intentional about
              putting your business before the right people who require the
              services you provide.
            </h2>
            <p className="text-2xl font-roboto">
              Jinncy Inc is a technology-driven firm. We specialize in product
              design, branding, construction, and launch. We at Jinncy Inc are
              dedicated to promoting local businesses through technology.
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
                We are a group of committed individuals that are intentional
                about putting your business before the right people who require
                the services you provide.
              </h2>
              <p className="text-1xl font-roboto">
                Jinncy Inc is a technology-driven firm. We specialize in product
                design, branding, construction, and launch. We at Jinncy Inc are
                dedicated to promoting local businesses through technology.
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
                  business website in order to guide its design and content.
                  This includes choosing a meaningful and memorable domain name
                  for your website as well as a suitable hosting plan for your
                  needs.
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
                  We create a style and appearance for your business's website
                  that is suited for its goals and the tastes of its target
                  audience. When designing your website, we consider the use
                  case and purpose, and then tailor the design to fit the
                  purpose of the site. We take great care to ensure that your
                  website looks great on both desktop and mobile devices.
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
                  business website in order to guide its design and content.
                  This includes choosing a meaningful and memorable domain name
                  for your website as well as a suitable hosting plan for your
                  needs.
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
                  We create a style and appearance for your business's website
                  that is suited for its goals and the tastes of its target
                  audience. When designing your website, we consider the use
                  case and purpose, and then tailor the design to fit the
                  purpose of the site. We take great care to ensure that your
                  website looks great on both desktop and mobile devices.
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
                  We put our designs into action and launch the website. Testing
                  the site is an important part of the building process to
                  ensure that it works properly on all devices. We establish an
                  online persona for your business and assist you in spreading
                  your message across the internet. We increase the visibility
                  of your business on the internet.
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
                  We launch the website and spread the word about it via
                  numerous marketing platforms. As part of our ongoing efforts
                  to ensure your business's visibility, we update the site with
                  fresh content, security upgrades, and bug fixes.
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
                  We put our designs into action and launch the website. Testing
                  the site is an important part of the building process to
                  ensure that it works properly on all devices. We establish an
                  online persona for your business and assist you in spreading
                  your message across the internet. We increase the visibility
                  of your business on the internet.
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
                  We launch the website and spread the word about it via
                  numerous marketing platforms. As part of our ongoing efforts
                  to ensure your business's visibility, we update the site with
                  fresh content, security upgrades, and bug fixes.
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
