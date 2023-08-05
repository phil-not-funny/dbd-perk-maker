import { Perk } from "@/types/types";
import React from "react";

export function savePerks(perks: any) {
  var parsedperks: Perk[] = perks.map((perk: any) => {
    console.log(perk);
    
    return { name: document.getElementById(perk.props.id + '-name')?.innerText, description: document.getElementById(perk.props.id + '-description')?.innerText };
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
