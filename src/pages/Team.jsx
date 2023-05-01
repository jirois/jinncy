import React from "react";
import PersonImg from "../assets/person1.png";
import PersonImg1 from "../assets/person2.png";
import LineGradient from "../components/LineGradient";
import SocialIcons from "../components/SocialIcons";

const Team = () => {
  return (
    <section id="our team" className="pb-24">
      <div className="text-center my-24 flex flex-col items-center">
        <h2 className="text-5xl font-opensans font-bold pb-6">Our Team</h2>
        <LineGradient width="w-24" />
      </div>
      <div className="flex flex-col items-center md:justify-between md:flex-row gap-6">
        {/* first person */}
        <div className="my-6">
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] overflow-hidden bg-gradient-rainblue  ">
            <img
              className="w-full h-full object-cover"
              src={PersonImg}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">Omas Ajiri</h4>
            <p className="text-text-grey text-2xl">Co founder</p>
            <SocialIcons />
          </div>
        </div>
        {/* second person */}
        <div className="my-6">
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] items-center overflow-hidden bg-gradient-rainblue  ">
            <img
              className="w-full h-full object-cover"
              src={PersonImg1}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">James Ralley</h4>
            <p className="text-text-grey text-2xl">Graphics designer</p>
            <SocialIcons />
          </div>
        </div>
        {/* third person */}
        <div className="my-6">
          <div className="w-[300px] h-[300px] md:w-[30rem] md:h-[30rem] items-start overflow-hidden bg-gradient-rainblue  ">
            <img
              className="w-full h-full object-cover"
              src={PersonImg}
              alt="first person profile pic"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-3xl pt-4 pb-1">Almond Welstone</h4>
            <p className="text-text-grey text-2xl">Marketing strategist</p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
