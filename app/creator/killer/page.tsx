"use client";

import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import IconButton from "@/components/IconButton";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import CharacterDescription from "@/components/CharacterDescription";
import { savePerks } from "@/helpers/io";
import React, { useState } from "react";
import Power from "@/components/Power";

const SurvivorCreator: React.FC<{}> = () => {
  const [anchorProps, setAnchorProps] = useState<any>();

  return (
    <div className="w-full">
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Killer Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design three perks and a killer description
      </Text>
      <Spacing space={12} />
      <CharacterDescription defaultShowcase={false} />
      <Spacing space={12} />
      <Power />
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
        <Perk iconCenter defaultId="perk-1" />
        <Perk iconCenter defaultId="perk-2" />
        <Perk iconCenter defaultId="perk-3" />
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
            setAnchorProps(savePerks(["perk-1", "perk-2", "perk-3"]));
          }}
        />
      </a>
    </div>
  );
};

export default SurvivorCreator;
