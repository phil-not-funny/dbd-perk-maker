import React from "react";

type TextSizes = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

interface TextProps {
  uppercase?: boolean;
  bold?: boolean;
  children: React.ReactNode;
  defaultSize?: TextSizes;
  wideScreenSize?: TextSizes;
  className?: string;
  width?: "full" | "default";
  tracking?: "wide" | "wider" | "widest" | "normal";
  center?: boolean;
  id?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  center,
  uppercase,
  bold,
  className = '',
  defaultSize = "base",
  wideScreenSize = defaultSize,
  width = "full",
  tracking = "normal",
  id
}) => {
  return (
    <p
      className={`text-white ${
        center ? "text-center" : "text-left"
      } text-${defaultSize} sm:text-${wideScreenSize} sm:tracking-${tracking} ${
        uppercase ? "uppercase" : ""
      } ${width === "full" ? "w-full" : "w-fit"} ${
        bold ? "font-semibold" : ""
      } ${className}`}
      id={id}
    >
      {children}
    </p>
  );
};

interface HeadingProps {
  uppercase?: boolean;
  children: string;
  defaultSize?: TextSizes;
  wideScreenSize?: TextSizes;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  uppercase,
  defaultSize = "base",
  wideScreenSize = defaultSize,
  className = ''
}) => {
  return (
    <h1 className={`text-center text-white tracking-wider sm:tracking-widest font-semibold text-${defaultSize} sm:text-${wideScreenSize} ${uppercase ? 'uppercase' : ''} ${className}`}>
      {children}
    </h1>
  );
};

export const NavBar: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="text-white sm:tracking-wider sm:text-lg text-xl font-semibold">
      {children}
    </span>
  );
};
