"use client";

import EmptyState from "@/components/EmptyState";
import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import React, { useState } from "react";

const PerkCreator: React.FC = () => {
  const [perkType, setPerkType] = useState<"very_rare" | "teachable">(
    "very_rare"
  );
  const [perks, setPerks] = useState([<Perk type={perkType} />]);

  return (
    <>
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Perk Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design one or multiple Perks in all Rarities.
      </Text>
      <Spacing space={12} />
      <Grid cols={3}>
        {...perks}
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
            onClick={() => {setPerks([...perks, <Perk type={perkType} />]); console.log(perks);
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
