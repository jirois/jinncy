import React from "react";

const CopyRight = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between w-full p-4 items-center">
      <ul className="flex text-light-grey list-none gap-4">
        <li className="text-[18px] font-semibold">
          <a href="jinncy.com/privacy">Privacy Policy</a>
        </li>
        <li className="text-[18px] font-semibold">
          <a href="jinncy.com/terms-and-condition">Terms and Conditions</a>
        </li>
      </ul>

      <p className="text-xl p-2 text-white">
        copyright @{new Date().getFullYear()} all rights reserved | Jinncy Inc
      </p>
    </section>
  );
};

export default CopyRight;
