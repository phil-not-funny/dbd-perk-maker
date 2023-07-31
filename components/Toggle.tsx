import React, { useState } from "react";

interface Props {
  text: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  className?: string;
}

const Toggle: React.FC<Props> = ({
  text,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}) => {
  const [set, setSet] = useState<boolean>(checked);

  return (
    <label className={"relative inline-flex items-center cursor-pointer " + className}>
      <input
        onChange={(e) => {
          onChange?.(e);
          setSet(!set);
        }}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={set}
        disabled={disabled}
      />
      <div className="w-11 h-6 peer-focus:outline-none rounded-full peer bg-blackLight peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-iridescent"></div>
      <span className="ml-3 text-base text-white">{text}</span>
    </label>
  );
};

export default Toggle;
