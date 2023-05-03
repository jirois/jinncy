import React from "react";
import SubHeading from "../components/SubHeading";
import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";
import InputButton from "../components/InputButton";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Footer = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <footer id="contact us" className="pt-12 pb-6 md:pt-24 md:pb-12">
      <div className="flex flex-col gap-14 md:gap-20">
        {isAboveMediumScreen ? (
          <motion.div
            className="text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SubHeading text="WHERE WE ARE" />
            <h2 className=" text-3xl md:text-5xl font-opensans font-semibold md:flex-wrap md:w-[90%] ">
              Contact Jinncy Inc. today; we can't wait to be a part of your
              remarkable and impacting business. We want to assist you in
              getting the services you provide to those who require them.
            </h2>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SubHeading text="WHERE WE ARE" />
            <h2 className=" text-3xl font-opensans font-semibold flex-wrap  text-white">
              Contact Jinncy Inc. today; we can't wait to be a part of your
              remarkable and impacting business. We want to assist you in
              getting the services you provide to those who require them.
            </h2>
          </motion.div>
        )}
        <motion.div
          className="text-white mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <LineGradient width="w-12" />
          <div className="mt-4">
            <p className="text-2xl md:text-4xl">contact@jinncy.com</p>
            <p className="text-pale-grey text-xl">
              +2348166569159/+2348034906770
            </p>
          </div>
        </motion.div>
        {isAboveMediumScreen ? (
          <div className="flex flex-col items-center gap-24 md:flex-row md:justify-between md:gap-44">
            <motion.div
              className="md:basis-2/5 gap-8 flex flex-col order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SubHeading text="Where To Find Us" />
              <p className="text-2xl md:text-3xl text-light-grey">
                No 113 IBB High Road Drive, Calabar, Cross River State, Nigeria
              </p>
            </motion.div>
            <motion.div
              className="md:basis-3/5 order-2 mr-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SubHeading text="Follow Us" />
              <SocialMediaIcons mobilePos="justify-start" />
              <InputButton />
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-24 ">
            <motion.div
              className=" gap-8 flex flex-col order-2 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SubHeading text="Where To Find Us" />
              <p className="text-xl text-light-grey">
                No 113 IBB High Road Drive, Calabar, Cross River State, Nigeria
              </p>
            </motion.div>
            <motion.div
              className=" w-full order-1 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SubHeading text="Follow Us" />
              <SocialMediaIcons mobilePos="justify-start" />
              <InputButton />
            </motion.div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
