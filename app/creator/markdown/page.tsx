"use client";

import GoBack from "@/components/GoBack";
import IconButton from "@/components/IconButton";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { Heading, Text } from "@/components/RichText";
import SimpleInput from "@/components/SimpleInput";
import Spacing from "@/components/Spacing";
import TextArea from "@/components/TextArea";
import { useState } from "react";

export default function Markdown() {
  const [markdown, setMarkdown] = useState<string>("");
  const [editing, setEditing] = useState(true);
  const [customClasses, setCustomClasses] = useState<string>("");

  return (
    <div className="w-full">
      <GoBack />
      <Heading uppercase className="text-3xl sm:text-4xl">
        markdown editor
      </Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design anything with an empty markdown editor
      </Text>
      <Spacing space={12} />
      <div className="flex justify-center items-center">
        {editing ? (
          <TextArea
            rows={20}
            className="p-4 w-2/3"
            value={markdown}
            onChange={(value) => setMarkdown(value)}
            placeholder="Try out Markdown here!"
          />
        ) : (
          <MarkdownDisplay
            value={markdown}
            className={`bg-blackLight w-2/3 ${customClasses}`}
          />
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
      <Spacing space={6} />
      {/* <SimpleInput onChange={(val) => setCustomClasses(val)} value={customClasses} className="!bg-blackLight p-2 rounded-sm" placeholder="Enter custom Tailwind classes here" /> */}
    </div>
  );
}
