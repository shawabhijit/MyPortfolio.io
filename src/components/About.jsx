import React from 'react';
import Section from './Section'
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "../constants";
import { BottomLine } from "../design/Hero";

const About = () => {
  return (
    <Section id="aboutme" >
      <BentoGrid className="w-[80%] z-[10]">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <BottomLine />
    </Section>
  );
};

export default About;