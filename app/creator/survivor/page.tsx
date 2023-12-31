"use client";

import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import IconButton from "@/components/IconButton";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import CharacterDescription from "@/components/CharacterDescription";
import React, { useEffect, useState } from "react";
import { writeProps } from "@/helpers/io";

const SurvivorCreator: React.FC<{}> = () => {
  const [anchorProps, setAnchorProps] = useState<any>();
  const [name, setName] = useState("charactername");
  const [description, setDescription] = useState("");
  const [lore, setLore] = useState("");
  const [perks, setPerk] = useState([{}, {}, {}]);
  const [uploaded, setUploaded] = useState({
    name: "charactername",
    description: "",
    lore: "",
    perks: [
      { name: "perkname", description: "" },
      { name: "perkname", description: "" },
      { name: "perkname", description: "" },
    ],
  });

  useEffect(() => {
    console.log(uploaded);
  }, [uploaded]);

  return (
    <div className="w-full">
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Survivor Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design three perks and a survivor description
      </Text>
      <Spacing space={12} />
      <CharacterDescription
        defaultShowcase={false}
        onNameChange={(val) => setName(val)}
        onDescriptionChange={(val) => setDescription(val)}
        onLoreChange={(val) => setLore(val)}
        defaultName={uploaded.name}
        defaultDescription={uploaded.description}
        defaultLore={uploaded.lore}
      />
      <Spacing space={16} />
      <Text
        uppercase
        className="border-b border-white"
        center
        defaultSize="xl"
        wideScreenSize="2xl"
        bold
      >
        personal perks
      </Text>
      <Spacing space={6} />
      <Grid cols={3}>
      <Perk
          iconCenter
          id="perk-1"
          onPerkChange={(perk) => (perks[0] = perk)}
          defaultPerk={uploaded.perks[0]}
        />
        <Perk
          iconCenter
          id="perk-2"
          onPerkChange={(perk) => (perks[1] = perk)}
          defaultPerk={uploaded.perks[1]}
        />
        <Perk
          iconCenter
          id="perk-3"
          onPerkChange={(perk) => (perks[2] = perk)}
          defaultPerk={uploaded.perks[2]}
        />
      </Grid>
      <a {...anchorProps} className="w-full">
        <IconButton
          icon={
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          }
          text="Download"
          onClick={() => {
            setAnchorProps(
              writeProps({ name, description, lore, perks })
            );
          }}
        />
      </a>
      <label htmlFor="DBDsurvivor-upload">
        <div className="p-2 bg-inherit hover:bg-dark w-fit text-white rounded-full cursor-pointer flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
            />
          </svg>

          <Text className="ml-2">Load File</Text>
        </div>
        <input
          id={"DBDsurvivor-upload"}
          className={`hover:cursor-pointer mx-auto hidden`}
          type="file"
          accept=".txt"
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              const reader = new FileReader();
              const handleFileLoad = (e: any) => {
                setUploaded(JSON.parse(e.target.result));
              };
              reader.onload = handleFileLoad;
              reader.readAsText(file);
            }
          }}
          hidden
        />
      </label>
    </div>
  );
};

export default SurvivorCreator;
