"use client";

import EmptyState from "@/components/EmptyState";
import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import IconButton from "@/components/IconButton";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import Toggle from "@/components/Toggle";
import { savePerks } from "@/helpers/io";
import React, { useEffect, useState } from "react";

const PerkCreator: React.FC = () => {
  const [teachable, setTeachable] = useState<boolean>(false);
  const [horizontally, setHorizontally] = useState<boolean>(false);
  const [iconsCentered, setIconsCentered] = useState<boolean>(false);
  
  const [perks, setPerks] = useState<any>([]);
  const [anchorProps, setAnchorProps] = useState<any>();

  const reusablePerk = (
    <Perk
      teachableType={teachable}
      horizontally={horizontally}
      iconCenter={iconsCentered}
    />
  );

  useEffect(() => {
    setPerks([reusablePerk]);
  }, []);

  return (
    <div className="w-full">
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Perk Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design one or multiple Perks in all Rarities.
      </Text>
      <Spacing space={6} />
      <Text uppercase tracking="wider" bold defaultSize="lg" center>
        settings
      </Text>
      <div className="flex flex-col items-end md:flex-row md:justify-evenly space-y-2 mt-2 md:mt-0">
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
          checked
        />
      </div>
      <Spacing space={12} />
      <Grid cols={horizontally ? 1 : 3}>
        {...perks.map(() => reusablePerk)}
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
      <Spacing space={12} />
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
          onClick={() => {setAnchorProps(savePerks(perks.map((perk: any) => perk.props.id)))}}
        />
      </a>
    </div>
  );
};

export default PerkCreator;
