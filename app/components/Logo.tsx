import logo from "../../public/deadbydaylightlogo.png";
import React from "react";

interface Props {
  rounded?: boolean;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<Props> = ({ rounded, outline, size, className }) => {
  return (
    <img
      alt="ioe Logo"
      className={`${className} ${outline ? "border border-gray-300" : ""} ${
        rounded && "rounded-sm"
      } ${
        !size || size === "sm"
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
