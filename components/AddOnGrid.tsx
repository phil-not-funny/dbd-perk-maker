"use client";

import React, { useEffect, useState } from "react";
import { Text } from "./RichText";
import SimpleInput from "./SimpleInput";
import TextArea from "./TextArea";
import MarkdownDisplay from "./MarkdownDisplay";
import IconButton from "./IconButton";
import Grid from "./Grid";
import CardButton from "./CardButton";
import EmptyState from "./EmptyState";

import commonAddon from "@/public/common_add_on.png";
import uncommonAddon from "@/public/uncommon_add_on.png";
import rareAddon from "@/public/rare_add_on.png";
import epicAddon from "@/public/epic_add_on.png";
import iridescentAddon from "@/public/iridescent_add_on.png";

import commonAddonTitle from "@/public/common_add_on_title.png";
import uncommonAddonTitle from "@/public/uncommon_add_on_title.png";
import rareAddonTitle from "@/public/rare_add_on_title.png";
import epicAddonTitle from "@/public/epic_add_on_title.png";
import iridescentAddonTitle from "@/public/iridescent_add_on_title.png";

export enum Rarities {
  common,
  uncommon,
  rare,
  epic,
  iridescent,
}

type Addon = {
  name: string;
  description: string;
  rarity: Rarities;
};

interface Props {
  defaultAddons?: Addon[];
}

export const AddOnGrid: React.FC<Props> = ({ defaultAddons = [] }) => {
  const [addons, setAddons] = useState(defaultAddons);

  useEffect(() => {
    setAddons(defaultAddons);
  }, [defaultAddons]);

  return (
    <Grid cols={3}>
      {addons?.map((addon) => (
        <AddOn
          defaultAddon={{
            name: addon.name,
            description: addon.description,
            rarity: addon.rarity,
          }}
        />
      ))}
      <CreateNewHelper
        onSelected={(rarity) => {
          addons?.push({
            name: "add-on name",
            description: "",
            rarity: rarity,
          });
          console.log(addons);
        }}
      />
    </Grid>
  );
};

interface SingleProps {
  className?: string;
  id?: string;
  defaultAddon?: Addon;
  onAddonChange?: (value: Addon) => void;
}

export const AddOn: React.FC<SingleProps> = ({
  className,
  id,
  defaultAddon = {
    name: "add-on name",
    description: "",
    rarity: Rarities.common,
  },
  onAddonChange,
}) => {
  const [editing, setEditing] = useState(true);
  const [img, setImg] = useState("");
  const [addon, setAddon] = useState(defaultAddon);

  useEffect(() => {
    setAddon(defaultAddon);
  }, [defaultAddon]);

  const getImage = (): string => {
    if (addon.rarity === Rarities.common) return commonAddon.src;
    if (addon.rarity === Rarities.uncommon) return uncommonAddon.src;
    if (addon.rarity === Rarities.rare) return rareAddon.src;
    if (addon.rarity === Rarities.epic) return epicAddon.src;
    if (addon.rarity === Rarities.iridescent) return iridescentAddon.src;
    return "";
  };
  const getTitleImage = (): string => {
    if (addon.rarity === Rarities.common) return commonAddonTitle.src;
    if (addon.rarity === Rarities.uncommon) return uncommonAddonTitle.src;
    if (addon.rarity === Rarities.rare) return rareAddonTitle.src;
    if (addon.rarity === Rarities.epic) return epicAddonTitle.src;
    if (addon.rarity === Rarities.iridescent) return iridescentAddonTitle.src;
    return "";
  };

  return (
    <div className={`w-full max-w-xl ${className}`}>
      {editing && (
        <label
          htmlFor={id + "-upload"}
          className="mx-auto flex items-center justify-center"
        >
          <div className="p-2 bg-inherit hover:bg-dark w-fit text-white rounded-full cursor-pointer flex items-center">
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
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <Text className="ml-2">Upload Image</Text>
          </div>
          <input
            id={id + "-upload"}
            className={` hover:cursor-pointer mx-auto hidden`}
            type="file"
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setImg(URL.createObjectURL(file));
              }
            }}
            hidden
          />
        </label>
      )}
      <div className="flex flex-row justify-center">
        <IconButton
          onClick={() => setEditing(!editing)}
          className="hover:bg-blackLight rounded-none w-fit"
          icon={
            editing ? (
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            )
          }
        />
      </div>
      <div className="flex flex-row items-center">
        {img ? (
          <img src={img} className="mx-auto h-20 w-20 m-2" />
        ) : (
          <img src={getImage()} className="mx-auto h-20 w-20 m-2" />
        )}
        <div className="bg-transparent border-blackLight ">
          <div className="relative">
            {editing ? (
              <SimpleInput
                value={addon.name}
                onChange={(value) => {
                  setAddon({
                    name: value,
                    description: addon.description,
                    rarity: addon.rarity,
                  });
                  onAddonChange?.(addon);
                }}
                className="absolute top-1.5 left-3 uppercase font-semibold !text-base"
                id={id + "-name"}
              />
            ) : (
              <Text
                uppercase
                defaultSize="base"
                bold
                className="absolute top-1.5 left-3 !text-beigeLight/80 !text-base"
                id={id + "-name"}
              >
                {addon.name}
              </Text>
            )}
            <img src={getTitleImage()} className="w-full h-auto" />
          </div>
          <div className="bg-blackLight">
            {editing ? (
              <TextArea
                onChange={(value) => {
                  setAddon({
                    name: addon.name,
                    description: value,
                    rarity: addon.rarity,
                  });
                  onAddonChange?.(addon);
                }}
                rows={10}
                className="resize-none !p-4"
                value={addon.description}
                placeholder="Design your Add-On Description here"
                id={id + "-description"}
              />
            ) : (
              <MarkdownDisplay value={addon.description} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CreateNewHelper: React.FC<{
  onSelected?: (selected: Rarities) => void;
}> = ({ onSelected }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 2) setStage(0);
  }, [stage]);

  return (
    <>
      {stage === 0 ? (
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
          onClick={() => setStage(1)}
          className="!h-full"
        />
      ) : stage === 1 ? (
        <div onClick={() => setStage(2)}>
          <Text
            uppercase
            className="hover:underline cursor-pointer"
            onClick={() => {
              onSelected?.(Rarities.common);
            }}
          >
            common
          </Text>
          <Text
            uppercase
            className="hover:underline cursor-pointer"
            onClick={() => onSelected?.(Rarities.uncommon)}
          >
            uncommon
          </Text>
          <Text
            uppercase
            className="hover:underline cursor-pointer"
            onClick={() => onSelected?.(Rarities.rare)}
          >
            rare
          </Text>
          <Text
            uppercase
            className="hover:underline cursor-pointer"
            onClick={() => onSelected?.(Rarities.epic)}
          >
            epic
          </Text>
          <Text
            uppercase
            className="hover:underline cursor-pointer"
            onClick={() => onSelected?.(Rarities.iridescent)}
          >
            iridescent
          </Text>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
