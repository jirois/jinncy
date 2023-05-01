import React from "react";
import TwitterIcon from "./Icons/TwitterIcon";
import FacebookBook from "./Icons/FacebookBook";
import LinkedinIcon from "./Icons/LinkedinIcon";

const SocialIcons = ({
  twitter = "/ajiriomas",
  linkedin = "/omasajiri",
  facebook = "/omasajiri",
}) => {
  return (
    <div className="w-16 h-16  mx-auto flex justify-center items-center gap-2">
      <a
        href={`https://www.twitter.com${twitter}`}
        target="_blank"
        rel="noreferrer"
        className="h-4 w-4 text-orange"
      >
        <TwitterIcon />
      </a>
      <a
        href={`https://www.linkedin/in${linkedin}`}
        target="_blank"
        rel="noreferrer"
        className="h-4 w-4 text-orange"
      >
        <LinkedinIcon />
      </a>
      <a
        href={`https://www.facebook.com${facebook}`}
        target="_blank"
        rel="noreferrer"
        className="h-4 w-4 text-orange"
      >
        <FacebookBook />
      </a>
    </div>
  );
};

export default SocialIcons;
