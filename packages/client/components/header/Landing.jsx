import React from "react";
import ContentCreation from "./ContentCreation";
import Hero from "./Hero";
import JoinCommunity from "./JoinCommunity";
import NewsLetter from "./NewsLetter";
import Section from "./Section";
import SubHero from "./SubHero";

const Landing = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <ContentCreation />
      <Section />
      <JoinCommunity />
      <NewsLetter />
    </div>
  );
};

export default Landing;
