import React, { useState } from "react";
import chracterFrame from "@/public/character_frame.png";
import { Text } from "./RichText";
import IconButton from "./IconButton";
import SimpleInput from "./SimpleInput";
import TextArea from "./TextArea";
import MarkdownDisplay from "./MarkdownDisplay";
import Spacing from "./Spacing";

interface Props {
  defaultShowcase?: boolean;
  id?: string;
}

const SurvivorDescription: React.FC<Props> = ({
  defaultShowcase = false,
  id = "survivor",
}) => {
  const [name, setName] = useState<string>("surivorname");
  const [description, setDescription] = useState<string>("");
  const [backstory, setBackstory] = useState<string>("");

  const [editing, setEditing] = useState<boolean>(!defaultShowcase);

  const [img, setImg] = useState<string>();

  return (
    <>
      <div className="flex flex-row items-center space-x-5 w-full justify-center">
        {editing && (
          <label
            htmlFor={id + "-upload"}
            className=" flex items-center justify-center"
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
              className={`hover:cursor-pointer hidden`}
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
      <div className="flex flex-col md:flex-row justify-center relative">
        {img ? (
          <img src={img} className="h-44 mx-auto md:mx-2 w-32 m-2" />
        ) : (
          <img
            src={chracterFrame.src}
            className="mx-auto md:mx-2 h-44 w-32 m-2"
          />
        )}
        <div className="mt-3 w-1/2">
          {editing ? (
            <SimpleInput
              value={name}
              onChange={(value) => setName(value)}
              className=" uppercase font-semibold w-full border-b border-white text-white "
              id={id + "-name"}
            />
          ) : (
            <Text
              uppercase
              defaultSize="xl"
              bold
              className="!text-xl border-b border-white w-full"
              id={id + "-name"}
            >
              {name}
            </Text>
          )}
          {editing ? (
            <TextArea
              onChange={(value) => setDescription(value)}
              rows={6}
              className="resize-none !p-4 w-full"
              value={description}
              placeholder="Short Surivor Description"
              id={id + "-description"}
            />
          ) : (
            <MarkdownDisplay
              value={description}
              className="!text-white/90 w-full"
            />
          )}
          <Spacing space={4} />
          <Text
            uppercase
            defaultSize="xl"
            bold
            className="!text-xl w-full"
            id={id + "-name"}
          >
            backstory
          </Text>
          {editing ? (
            <TextArea
              onChange={(value) => setBackstory(value)}
              rows={10}
              className="resize-y !p-4 w-full"
              value={backstory}
              placeholder="Backstory of Survivor"
              id={id + "-description"}
            />
          ) : (
            <MarkdownDisplay value={backstory} className="!text-white/90 w-full" />
          )}
        </div>
      </div>
    </>
  );
};

export default SurvivorDescription;
