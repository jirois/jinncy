import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollButton from "../components/ScrollButton";

const Landing = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-deep-orange before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-deep-orange before:left-[-50%] before:top-[-50%]`;

  const isAboveMediumScreens = useMediaQuery("(min-Width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 text-white"
    >
      {/* HERO TEXT SECTION */}
      {isAboveMediumScreens ? (
        <div className="flex justify-between gap-32">
          <div className="flex flex-col basis-3/5 items-start z-10 ">
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
              <h2 className="text-7xl font-opensans font-semibold text-white mb-8">
                Hello Folks, We are Jinncy Inc!{" "}
              </h2>
            </motion.div>
            <motion.div
              className="mb-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex gap-3 py-4 items-center">
                <LineGradient width="w-12" />
                <p className="text-2xl">
                  we create incredible digital experience for you and your
                  business.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex justify-between gap-32 items-center">
                <h4 className="font-bold">Follow Us</h4>
                <div className="flex gap-6">
                  <a href="/linkedin" target="_target" rel="noreferral">
                    {" "}
                    linkedin
                  </a>
                  <a href="/twitter" target="_target" rel="noreferral">
                    {" "}
                    twitter
                  </a>
                  <a href="/facebook" target="_target" rel="noreferral">
                    {" "}
                    facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          {/* DESKTOP SIDEBAR */}
          <div className="justify-self-end -mt-8 ">
            <div className="pt-8 pb-2 pl-6 pr-16 ">
              <div className="flex gap-5 items-center">
                <AnchorLink
                  className={`${
                    selectedPage === "about us" ? selectedStyles : "bg-grey"
                  } w-3 h-3 rounded-full`}
                  href={`#about us`}
                  onClick={() => setSelectedPage("about us")}
                />
                <p className="text-2xl">About</p>
              </div>
              <p className="text-1xl text-gray-400">Who we are</p>
            </div>
            <div className="pt-8 pb-2 pl-6 pr-16 ">
              <div className="flex gap-5 items-center">
                <AnchorLink
                  className={`${
                    selectedPage === "services" ? selectedStyles : "bg-grey"
                  } w-3 h-3 rounded-full`}
                  href={`#services`}
                  onClick={() => setSelectedPage("services")}
                />
                <p className="text-2xl">Services</p>
              </div>
              <p className="text-1xl text-gray-400">What we do</p>
            </div>
            <div className="pt-8 pb-2 pl-6 pr-16 ">
              <div className="flex gap-5 items-center">
                <AnchorLink
                  className={`${
                    selectedPage === "contact us" ? selectedStyles : "bg-grey"
                  } w-3 h-3 rounded-full`}
                  href={`#contact us`}
                  onClick={() => setSelectedPage("contact us")}
                />
                <p className="text-2xl">Contact</p>
              </div>
              <p className="text-1xl text-gray-400">Get in touch</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full">
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
            <h2 className="text-5xl font-opensans font-semibold text-white mt-[40%] mb-8">
              Hello Folks, We are Jinncy Inc!{" "}
            </h2>
          </motion.div>
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex gap-3 py-4 items-center">
              <LineGradient width="w-12" />
              <p className="text-xl">
                we create incredible digital experience for you and your
                business.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex  gap-16 items-center">
              <h4 className="font-bold">Follow Us</h4>
              <div className="flex gap-6">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="linkedin-link" src="../assets/linkedin.png" />
                </a>
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="twitter-link" src="../assets/twitter.png" />
                </a>
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="facebook-link" src="../assets/facebook.png" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Landing;
