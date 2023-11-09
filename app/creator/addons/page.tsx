import { AddOn, AddOnGrid } from "@/components/AddOnGrid";
import GoBack from "@/components/GoBack";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";

export default function AddOns() {
  return (
    <>
      <GoBack />
      <Heading className="text-3xl sm:text-4xl">Add-Ons Designer</Heading>
      <Text center tracking="wide" defaultSize="lg" wideScreenSize="xl">
        Design killer add-ons or item add-ons
      </Text>
      <Spacing space={12} />
      <AddOnGrid />
    </>
  );
}
