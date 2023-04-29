import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import useMediaQuery from "../hooks/useMediaQuery";
import SidebarMenu from "./SidebarMenu";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <div className="mx-auto w-4/5 flex justify-between text-white items-center mt-[20px]">
      <h1 className="text-4xl font-opensans font-semibold text-orange">
        J<span className=" text-white">inncy</span>
      </h1>
      {isAboveMediumScreen ? (
        <div className="flex basis-2 justify-between items-center py-4 gap-4">
          <p className="text-3xl">Menu</p>

          <MenuIcon
            setIsMenuToggled={setIsMenuToggled}
            isMenuToggled={isMenuToggled}
          />
        </div>
      ) : (
        <button className="flex basis-2 justify-between items-center  py-4 gap-4 cursor-pointer">
          <MenuIcon
            width="w-9"
            border="border-[1px]"
            gap="gap-1"
            setIsMenuToggled={setIsMenuToggled}
            isMenuToggled={isMenuToggled}
          />
        </button>
      )}
      {/* MENU POPUP */}
      {isMenuToggled && (
        <SidebarMenu
          setIsMenuToggled={setIsMenuToggled}
          isMenuToggled={isMenuToggled}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </div>
  );
};

export default Navbar;
