"use client";

import EmptyState from "@/components/EmptyState";
import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import Toggle from "@/components/Toggle";
import React, { useState } from "react";

const PerkCreator: React.FC = () => {
  const [teachable, setTeachable] = useState<boolean>(false);
  const [horizontally, setHorizontally] = useState<boolean>(false);
  const [iconsCentered, setIconsCentered] = useState<boolean>(false);

  const reusablePerk = (
    <Perk teachableType={teachable} iconCenter={iconsCentered} />
  );

  const [perks, setPerks] = useState([reusablePerk]);

  return (
    <>
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Perk Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design one or multiple Perks in all Rarities.
      </Text>
      <Spacing space={6} />
      <Text uppercase tracking="wider" bold defaultSize="lg" center>
        settings
      </Text>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly space-y-2 mt-2 md:mt-0">
        <Toggle
          text="Horizontally Aligned"
          onChange={(e) => setHorizontally(!horizontally)}
        />
        <Toggle
          text="Teachable Perks"
          onChange={(e) => setTeachable(!teachable)}
        />
        <Toggle
          text="Icons Centered"
          onChange={(e) => setIconsCentered(!iconsCentered)}
        />
      </div>
      <Spacing space={12} />
      <Grid cols={3}>
        {perks.map(() => reusablePerk)}
        {perks.length < 3 && (
          <div className="h-full flex items-center">
            <EmptyState
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
              onClick={() => {
                setPerks([...perks, reusablePerk]);
                console.log(perks);
              }}
              className="!h-full"
            />
          </div>
        )}
      </Grid>
    </>
  );
};

export default PerkCreator;
