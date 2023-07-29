import React, { useState } from "react";

interface Props {
  rows?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  value?: string;
}

const TextArea: React.FC<Props> = ({ rows = 12, placeholder, onChange, className, value }) => {
  return (
    <textarea
      id="comment"
      rows={rows}
      className={`w-full m-0 p-0 text-sm !rounded-none text-white bg-blackLight ${className}`}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
    />
  );
};

export default TextArea;
