"use client";

import GoBack from "@/components/GoBack";
import Grid from "@/components/Grid";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import Perk from "@/components/Perk";
import { Heading, Text } from "@/components/RichText";
import Spacing from "@/components/Spacing";
import TextArea from "@/components/TextArea";
import React, { useState } from "react";

const showcase = `Basic Markdown:<br/>
This is a **fat text**<br/>
This is a _cursive text_<br/>
If you haven't noticed, these are line breaks:<br/><br/>
Advanced Markdown:
> This makes a blockquote (used at the end of Dbd Perks)

^ End with two [Enter]<br/>
Here's a List:
- Item no.1
- Item no.2<br/>Aligns in next line

^ End with two [Enter]<br/><br/>
Different colors:<br/>
<span class="uncommon">yellow</span><br/>
<span class="rare">green</span><br/>
<span class="veryrare">purple</span><br/>
<span class="teachable">orange</span><br/>
<span class="bloodpoints">red</span><br/>
<span class="iridescent">pink</span>`;

const dramaturgie = `When people bring you to their project, they do so because of the unexpected magic you bring to your performance.<br/><br/>
_Dramaturgy_ activates while you are healthy.<br/><br/>
While running, press the _active ability button 2_ to run with knees high for 0.5 seconds and then gain a <span class="uncommon">25%</span> Haste for <span class="teachable">2 seconds</span>, followed by a unknown effect.
- Become **Exposed** for <span class="bloodpoints">12 seconds</span>;
- Gain <span class="bloodpoints">25%</span> **Haste** for <span class="bloodpoints">2 seconds</span>;
- Scream, but nothing happens;
- Gain a random rare item, with random add-ons and drop any held item.

_The same effect cannot happen twice in a row_<br/><br/>_Dramaturgy_ causes **exhaustion** for <span class="veryrare">40 seconds</span>. Can't be used while exhausted.<br/><br/>
> Exposed Survivors will be downed by basic attacks even if uninjured.<br/>haste increases Survivor movement speed.<br/>Exhaustion prevents Survivors form activating other perks that cause Exhaustion.

<br/>

> "Take the part. It's a good movie, he says. What's the worst that can happen?" - Nicolas Cage`;

export default function Help({}) {
  const [markdown, setMarkdown] = useState<string>(showcase);

  return (
    <>
      <GoBack />
      <Heading defaultSize="3xl" wideScreenSize="4xl" uppercase>
        Help Page
      </Heading>
      <Spacing space={6} />
      <Text defaultSize="base" wideScreenSize="lg">
        This application uses Markdown rendering to transform user-typed plain
        text into good-looking styled text.
        <br />
        If you are unfamiliar with Markdown, here is a quick rundown of what it
        looks like. Feel free to edit the textfield and try it out on your own.
        <br />
        All of the Markdown components have been automatically designed for Dbd
        Perks.
        <br />
        Content is subject to change as we update the site to make it easier for
        users to create their own perks.
      </Text>
      <Spacing space={12} />
      <Grid cols={2}>
        <TextArea
          rows={20}
          className="p-4"
          value={markdown}
          onChange={(value) => setMarkdown(value)}
          placeholder="Try out Markdown here!"
        />
        <MarkdownDisplay value={markdown} />
      </Grid>
      <Spacing space={12} />
      <Heading defaultSize="xl" wideScreenSize="2xl">
        Example Perk
      </Heading>
      <Spacing space={12} />
      <Perk className="w-full md:w-1/3 md:mx-auto" defaultName="dramaturgie" defaultDescription={dramaturgie} defaultShowcase />
    </>
  );
}
