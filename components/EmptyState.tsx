import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<Props> = ({ className, icon, onClick }) => {
  return (
    <button
      className={`w-full hover:border-solid flex justify-center items-center border-dashed h-full my-auto cursor-pointer rounded-md shadow-md shadow-warmGray-800 bg-hoverDark text-white border-2 border-white/20 p-3 ${className}`}
        onClick={onClick}
    >
        {icon}
    </button>
  );
};

export default EmptyState
