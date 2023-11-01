import React, { useEffect, useState } from "react";

import power_icon from "@/public/power_icon.png";
import power_title from "@/public/power_title.png";

import { Text } from "./RichText";
import IconButton from "./IconButton";
import TextArea from "./TextArea";
import MarkdownDisplay from "./MarkdownDisplay";
import SimpleInput from "./SimpleInput";

interface Props {
  className?: string;
  defaultPower?: { name: string; description: string };
  defaultShowcase?: boolean;
  id?: string;
  onPowerChange?: (power: { name: string; description: string }) => void;
}

const Power: React.FC<Props> = ({
  className = "",
  defaultPower = { name: "powername", description: "" },
  defaultShowcase = false,
  id,
  onPowerChange,
}) => {
  const [editing, setEditing] = useState<boolean>(!defaultShowcase);
  const [power, setPower] = useState(defaultPower);

  const [img, setImg] = useState("");

  useEffect(() => {
    setPower(defaultPower);
  }, [defaultPower]);

  return (
    <div className="w-full flex justify-center">
      <div className={`max-w-lg ${className}`}>
        {editing && (
          <label
            htmlFor={id + "-upload"}
            className="mx-auto flex items-center justify-center"
          >
            <div className="p-2 bg-inherit hover:bg-dark w-fit text-white rounded-full cursor-pointer flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <Text className="ml-2">Upload Image</Text>
            </div>
            <input
              id={id + "-upload"}
              className={`hover:cursor-pointer mx-auto hidden`}
              type="file"
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  setImg(URL.createObjectURL(file));
                }
              }}
              hidden
            />
          </label>
        )}
        {img ? (
          <img src={img} className="mx-auto h-32 w-32 m-2" />
        ) : (
          <img src={power_icon.src} className="mx-auto h-32 w-32 m-2" />
        )}
        <div className="bg-transparent border-blackLight ">
          <div className="relative">
            {editing ? (
              <SimpleInput
                value={power.name}
                onChange={(value) => {
                  setPower({ name: value, description: power.description });
                  onPowerChange?.(power);
                }}
                className="absolute top-4 left-4 uppercase font-semibold"
                id={id + "-name"}
              />
            ) : (
              <Text
                uppercase
                defaultSize="xl"
                bold
                className="absolute top-4 left-4 !text-beigeLight/80 !text-xl"
                id={id + "-name"}
              >
                {power.name}
              </Text>
            )}
            <img src={power_title.src} className="w-full h-auto" />
          </div>
          <div className="bg-blackLight">
            {editing ? (
              <TextArea
                onChange={(value) => {
                  setPower({ name: power.name, description: value });
                  onPowerChange?.(power);
                }}
                rows={20}
                className="resize-none !p-4"
                value={power.description}
                placeholder="Design your Power Description here"
                id={id + "-description"}
              />
            ) : (
              <MarkdownDisplay value={power.description} />
            )}
          </div>
          <IconButton
            onClick={() => setEditing(!editing)}
            className="hover:bg-blackLight rounded-none w-fit"
            icon={
              editing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Power;
