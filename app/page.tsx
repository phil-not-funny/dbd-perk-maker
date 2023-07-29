"use client";

import Spacing from "@/components/Spacing";
import { Heading, Text } from "@/components/RichText";
import Grid from "@/components/Grid";
import CardButton from "@/components/CardButton";
import dbdfont from "@/public/deadbydaylightfont.png";

export default function Home() {
  return (
    <>
      <img src={dbdfont.src} className="mx-auto h-36 w-auto" />
      <Heading uppercase defaultSize="3xl" wideScreenSize="4xl" className="text-3xl sm:text-4xl">PERKMAKER</Heading>
      <Spacing space={24} />
      <Grid cols={4}>
        <CardButton href="/creator/perk" title="Perk Creator" description="Create a single Dead By Daylight Perk in all rarities. No matter if Survivor or Killer." className="h-48" />
        <CardButton href="/creator/survivor" title="Survivor Creator" description="Create a Survivor and three Perks. Only applies to Survivor." className="h-48" />
        <CardButton href="/creator/killer" title="Killer Creator" description="Create a Killer Power and three Perks. Only applies to Killer." className="h-48" />
        <CardButton href="/creator/icon" title="Icon Creator" description="Create a single Dead By Daylight icon for killer Power or Perks. No matter if Survivor or Killer." className="h-48" />
      </Grid>
    </>
  );
}