import React, { useState } from "react";

import very_rare_icon from "@/public/very_rare_icon.png";
import very_rare_title from "@/public/vary_rare_title.png";

import { Text } from "./RichText";
import IconButton from "./IconButton";
import TextArea from "./TextArea";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import MarkdownDisplay from "./MarkdownDisplay";
import SimpleInput from "./SimpleInput";

interface Props {
  type?: "very_rare" | "teachable";
  className?: string;
  defaultName?: string;
  defaultDescription?: string;
  defaultShowcase?: boolean;
}

const Perk: React.FC<Props> = ({ type, className, defaultName = "perkname", defaultDescription = "", defaultShowcase = false }) => {
  const [editing, setEditing] = useState<boolean>(!defaultShowcase);
  const [description, setDescription] = useState<string>(defaultDescription);
  const [name, setName] = useState<string>(defaultName)


  return (
    <div className={className}>
    <img src={very_rare_icon.src} className="mx-auto h-32 w-auto mb-2" />
    <div className="bg-dark border-blackLight ">
      <div className="relative">
        {
          editing ? <SimpleInput value={name} onChange={(value) => setName(value)} className="absolute top-6 left-4 uppercase font-semibold" /> : <Text
          uppercase
          defaultSize="xl"
          bold
          className="absolute top-6 left-4 !text-beigeLight/80 !text-xl"
        >
          {name}
        </Text>
        }
        <img src={very_rare_title.src} className="w-full h-auto" />
      </div>
      <div className="bg-blackLight">
        {editing ? (
          <TextArea
            onChange={(value) => setDescription(value)}
            rows={20}
            className="resize-none !p-4"
            value={description}
            placeholder="Design your Perk Description here"
          />
        ) : (
          <MarkdownDisplay value={description} />
        )}
      </div>
      <IconButton
        onClick={() => setEditing(!editing)}
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
  );
};

export default Perk;
