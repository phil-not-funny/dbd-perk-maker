'use client'

import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import React, { useState } from "react";

const PerkCreator: React.FC = () => {
  const [perkType, setPerkType] = useState<"very_rare" | "teachable">("very_rare");

  return <>
    <GoBack />
    <Heading className="text-3xl sm:text-4xl">Perk Designer</Heading>
    <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">Design one or multiple Perks in all Rarities.</Text>
    <Spacing space={12} />
    <Grid cols={3}>
      <Perk type={perkType} name="testperk 1" />
      <Perk type={perkType} name="testperk 2" />
    </Grid>
  </>
};

export default PerkCreator;
