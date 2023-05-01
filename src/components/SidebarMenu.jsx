import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Link = ({ page, pagenum, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-deep-orange flex gap-2 py-4 items-center"
          : "flex gap-2 py-4 items-center"
      } hover:text-deep-orange transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <span className="font-bold text-gray-300">{pagenum}</span>{" "}
      <span className="font-bold text-xl">{page}</span>
    </AnchorLink>
  );
};

const borderBottom = "0.5px solid #938F94";

const SidebarMenu = ({
  setIsMenuToggled,
  isMenuToggled,
  selectedPage,
  setSelectedPage,
}) => {
  return (
    <div
      className={`fixed right-0 bottom-0 h-full w-[300px] bg-dark-grey z-40 px-4 ease-in-out duration-500 ${
        isMenuToggled ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* SIDEBAR HEADER */}
      <header>
        <div
          className="flex justify-between pt-6 pb-16"
          style={{ borderBottom: `${borderBottom}` }}
        >
          <h4 className="text-deep-orange font-bold">JINNCY INC</h4>
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img
              className="text-white font-semibold"
              fill="white"
              alt="close-icon"
              src="../assets/close-icon.svg"
            />
          </button>
        </div>
      </header>
      {/* SIDEBAR CONTENT */}
      <ul className="">
        <li>
          <div
            className=" "
            style={{ borderBottom: `${borderBottom}` }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page={"Home"}
              pagenum="01."
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </li>
        <li>
          <div
            className=" "
            style={{ borderBottom: `${borderBottom}` }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page={"About Us"}
              pagenum="02."
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </li>
        <li>
          <div
            className=" "
            style={{ borderBottom: `${borderBottom}` }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page={"Our Services"}
              pagenum="03."
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </li>
        <li>
          <div
            className=" "
            style={{ borderBottom: `${borderBottom}` }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page={"Our Team"}
              pagenum="04."
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </li>
        <li>
          <div
            className=" "
            style={{ borderBottom: `${borderBottom}` }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page={"Contact Us"}
              pagenum="05."
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </li>

        <p className="my-12">
          At jinncy we are very intentional when it comes to delivering the best
          for our customs
        </p>
      </ul>
      {/* Footer */}
      <footer>
        <SocialMediaIcons />
      </footer>
    </div>
  );
};

export default SidebarMenu;
