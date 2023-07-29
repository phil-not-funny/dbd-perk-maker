import React from "react";

export interface Props {
  text?: string;
  icon: React.ReactNode;
  onClick: any;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const IconButton: React.FC<Props> = ({
  text,
  icon,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={`bg-inherit hover:bg-dark rounded-full py-2 px-1 tracking-wide outline-none text-white text-sm ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div className="px-2">{icon}</div>
        {text && <div className="pr-2">{text}</div>}
      </div>
    </button>
  );
};

export default IconButton;
