import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import SubHeading from "../components/SubHeading";

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
          <div className=" flex flex-col gap-[30px]">
            <div className="text-orange">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
              >
                <g>
                  <path
                    fill="#231F20"
                    d="M55,11H9c-0.553,0-1,0.447-1,1v34c0,0.553,0.447,1,1,1h46c0.553,0,1-0.447,1-1V12
		C56,11.447,55.553,11,55,11z"
                  />
                  <path
                    fill="#231F20"
                    d="M63,49h-3V11c0-2.211-1.789-4-4-4H8c-2.211,0-4,1.789-4,4v38H1c-0.553,0-1,0.447-1,1v3c0,2.211,1.789,4,4,4
		h56c2.211,0,4-1.789,4-4v-3C64,49.447,63.553,49,63,49z M58,49H36c-0.553,0-1,0.447-1,1v1h-6v-1c0-0.553-0.447-1-1-1H6V11
		c0-1.104,0.896-2,2-2h48c1.104,0,2,0.896,2,2V49z"
                  />
                </g>
              </svg>
            </div>
            <h4 className="font-bold text-2xl">Brand Identity</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-[30px]">
            <img alt="click" />
            <h4 className="font-bold text-2xl">Illustration</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-[30px]">
            <img alt="click" />
            <h4 className="font-bold text-2xl">Web Design</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
        </div>
        {/* The Second Section */}
        <div className="flex flex-col md:justify-between md:flex-row gap-14">
          <div className=" flex flex-col gap-[30px]">
            <img src="../assets/word_book.svg" alt="click" />
            <h4 className="font-bold text-2xl">Product Strategy</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-[30px]">
            <img alt="click" />
            <h4 className="font-bold text-2xl">UI/UX Design</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-[30px]">
            <img alt="click" />
            <h4 className="font-bold text-2xl">Mobile Development</h4>
            <p className="text-text-grey text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Malesuada amet mauris
              iaculis proin pulvinar. Velit imperdiet dignissim cursus et
              eleifend sed. At et rhoncus ut dolor. Enim ultricies pretium
              fermentum varius ipsum sit eu.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
