import React from "react";

interface Props {
  children: any;
  center?: boolean;
  border?: boolean;
  chain?: boolean;
  cols?: number;
  childrenClass?: string;
}

const Grid: React.FC<Props> = ({ children, center, border, chain, cols, childrenClass }) => {
  return (
    <ul
      className={`grid gap-6 grid-cols-1 ${
        !cols || cols === 3
          ? `${!chain && "sm:grid-cols-2"} lg:grid-cols-3`
          : cols === 2
          ? "sm:grid-cols-2"
          : cols === 4
          ? `${!chain && "sm:grid-cols-2 md:grid-cols-3"} lg:grid-cols-4`
          : cols === 5 &&
            `${
              !chain && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            } xl:grid-cols-5`
      }`}
    >
      {children.map((child: any) => (
        <li
          key={child?.props?.id}
          className={`col-span-1 ${
            border && "bg-dark rounded-lg shadow divide-y divide-gray-200"
          }`}
        >
          <div
            className={`w-full h-full ${
              center && "flex items-center justify-center"
            } p-2 space-x-6 text-cafe ${childrenClass}`}
          >
            {child}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Grid;