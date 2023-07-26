import * as logo from "../public/deadbydaylightlogo.png";
import React from "react";

interface Props {
  rounded?: boolean;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<Props> = ({ rounded, outline, size = "lg", className }) => {
  return (
    <img
      alt="DeadByDaylight"
      src={logo.default.src}
      className={`${className} p-4 ${outline ? "border border-gray-300" : ""} ${
        rounded && "rounded-sm"
      } ${
        size === "sm"
          ? "h-12"
          : size === "xs"
          ? "h-6"
          : size === "md"
          ? "h-16"
          : size === "lg"
          ? "h-28"
          : ""
      }`}
    />
  );
};

export default Logo;
