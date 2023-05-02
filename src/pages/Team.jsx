import React from "react";
import PersonImg from "../assets/Ajiri_photo-re.png";
import AnabelImg from "../assets/anabel_photo.png";
import CynthiaImg from "../assets/cynthia_photo.png";
import LineGradient from "../components/LineGradient";
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section id="our team" className="pb-24">
      <div className="text-center my-24 flex flex-col items-center">
        <h2 className="text-5xl font-opensans font-bold pb-6">Our Team</h2>
        <LineGradient width="w-24" />
      </div>
      <div className="flex flex-col items-center md:justify-between md:flex-row gap-6">
        {/* first person */}
        <motion.div
          className="my-3 md:my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] n bg-gradient-rainblue  ">
            <img
              className="w-full h-full object-center"
              src={PersonImg}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">Omas Ajiri</h4>
            <p className="text-text-grey text-2xl">Co founder</p>
            <SocialIcons />
          </div>
        </motion.div>
        {/* second person */}
        <motion.div
          className="my-3 md:my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] bg-gradient-rainblue">
            <img
              className="w-full h-full object-center object-fill"
              src={CynthiaImg}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">Cynthia Chioma</h4>
            <p className="text-text-grey text-2xl">Graphics/ Motion designer</p>
            <SocialIcons />
          </div>
        </motion.div>
        {/* third person */}
        <motion.div
          className="my-3 md:my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] items-start overflow-hidden bg-gradient-rainblue  ">
            <img
              className="w-full h-full overflow-hidden object-center"
              src={AnabelImg}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">Ruth Anabel</h4>
            <p className="text-text-grey text-2xl">Marketing strategist</p>
            <SocialIcons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
