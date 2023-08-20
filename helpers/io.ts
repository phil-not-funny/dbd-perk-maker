import { Perk } from "@/types/types";
import React from "react";

export function savePerks(perks: any) {
  var parsedperks: string[] = perks.map((perk: string) => {

    return { 
      name: sessionStorage.getItem(perk + "-name"),
      description: sessionStorage.getItem(perk + "-description"),
    };
  });
  console.log(parsedperks);

  return {
    download: true,
    href:
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(JSON.stringify(parsedperks)),
  };
}

export function loadPerks() {}
