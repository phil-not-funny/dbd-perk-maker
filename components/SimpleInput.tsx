import React from "react";

interface Props {
    value?: string;
    placeholder?: string;
    id?: string;
    onChange: (value: string) => void;
    className?: string;
}

const SimpleInput: React.FC<Props> = ({id = "perk", value = "", placeholder, onChange, className}) => {
  return (
    <input
      type="text"
      id={id}
      className={`bg-transparent text-beigeLight/80 text-xl rounded-none block w-full focus:ring-0 focus:border-0 border-0 ring-0 overflow-hidden ${className}`}
      placeholder={placeholder}
      required
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        sessionStorage.setItem(id, e.target.value);
      }}
      name={value}
    ></input>
  );
};

export default SimpleInput;