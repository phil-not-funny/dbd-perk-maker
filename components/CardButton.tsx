import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heading, Text } from "./RichText";

interface Props {
  href: string;
  title: string;
  description: string;
  className?: string
}

const CardButton: React.FC<Props> = ({ href, title, description, className = '' }) => {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`w-full rounded-md shadow-md shadow-warmGray-800 bg-hoverDark text-white border border-white/20 p-3 ${className} flex flex-col items-start`}
      onClick={() => router.push(href)}
    >
        <Heading className="text-lg sm:text-xl mb-4 w-full">{title}</Heading>
        <Text defaultSize="base" width="full" tracking="wide" >{description}</Text>
    </motion.button>
  );
};

export default CardButton;
