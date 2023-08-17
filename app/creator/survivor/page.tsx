"use client"

import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import SurvivorDescription from "@/components/SurvivorDescription";
import React from "react";


const SurvivorCreator: React.FC<{}> = () => {
  return (
    <div className="w-full">
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Survivor Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design three perks and a survivor description
      </Text>
      <Spacing space={12} />
      <SurvivorDescription defaultShowcase={false} />
      <Spacing space={16} />
      <Text uppercase className="border-b border-white" center defaultSize="xl" wideScreenSize="2xl" bold>personal perks</Text>
      <Spacing space={6} />
      <Grid cols={3}>
        <Perk iconCenter defaultId="perk-1" />
        <Perk iconCenter defaultId="perk-2"/>
        <Perk iconCenter defaultId="perk-3"/>
      </Grid>
    </div>
  );
};

export default SurvivorCreator;