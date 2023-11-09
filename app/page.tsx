"use client";

import Spacing from "@/components/Spacing";
import { Heading, Text } from "@/components/RichText";
import Grid from "@/components/Grid";
import CardButton from "@/components/CardButton";
import dbdfont from "@/public/deadbydaylightfont.png";
import Link from "@/node_modules/next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dbd Perk Maker",
  description: "Dbd Perk maker without shit design",
};

export default function Home() {
  return (
    <>
      <img src={dbdfont.src} className="mx-auto h-14 sm:h-24 md:h-36 w-auto" />
      <Heading uppercase defaultSize="3xl" wideScreenSize="4xl" className="text-3xl sm:text-4xl">PERKMAKER</Heading>
      <Spacing space={24} />
      <Grid cols={4}>
        <CardButton href="/creator/perk" title="Perk Creator" description="Create a single Dead By Daylight Perk in all rarities. No matter if Survivor or Killer." className="h-48" />
        <CardButton href="/creator/survivor" title="Survivor Creator" description="Create a Survivor and three Perks. Only applies to Survivor." className="h-48" />
        <CardButton href="/creator/killer" title="Killer Creator" description="Create a Killer Power and three Perks. Only applies to Killer." className="h-48" />
        <CardButton href="/creator/addons" title="Add-Ons Creator" description="Create Add-ons for Killer power or Survivor items." className="h-48" />
      </Grid>
      <Spacing space={24} />
      <Text center defaultSize="lg" wideScreenSize="xl">Need help designing perks?</Text>
      <Link href="/help"><Text center defaultSize="base" wideScreenSize="lg" className="text-slate-300 hover:underline hover:underline-offset-2 transition-all duration-150 ease-in-out">Check out the Help Page</Text></Link>
      <Spacing space={6} />
      <Text center defaultSize="lg" wideScreenSize="xl">Not looking for anything specific?</Text>
      <Link href="/creator/markdown"><Text center defaultSize="base" wideScreenSize="lg" className="text-slate-300 hover:underline hover:underline-offset-2 transition-all duration-150 ease-in-out">Check out the MKD Editor</Text></Link>
    </>
  );
}
