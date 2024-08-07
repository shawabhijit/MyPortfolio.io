import React, { useRef } from "react";
import Section from "./Section";
import { curve, heroBackground, MyImg } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine , Gradient } from "../design/Hero";
import { heroIcons } from '../constants';
import { ScrollParallax } from "react-just-parallax";
import FollowMe from "./FollowMe";
import InstaProfile from "./InstaProfile";
import TechStacks from "./Tech";


const Hero = () => {
    const parallaxRef = useRef(null);


  return <Section className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOfset="lg:translate-y-[5.25rem]"
        customPadding
        id="home"
    >
        <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <h1 className="h1 mb-6">
                    Transforming Concepts into Seamless&nbsp;User {` `}
                    <span className="inline-block relative text-color-1">Experiences <img src={curve} alt="curve"
                    className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28}/></span>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Hi! I am <strong>Abhijit Sahoo</strong> , a Frontend Developer and UI Designer </p>
                <Button href="/pricing" white className={``} >
                    Cheack my Work
                </Button>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img src={MyImg} alt="robot" className="w-full scale-[1.7] translate-y-[20%] md:scale-[1] md:-translate-y-[2%] lg:-translate-y-[8%]" width={1024} height={490} />
                            
                            <FollowMe className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                            <ScrollParallax isAbsolutelyPositioned zIndex={100}>
                                <ul className="hidden absolute -left-[5rem] bottom-[7.5rem] px-1 bg-n-9/40 backdrop-blur-sm border border-n-1/10 rounded-2xl xl:flex">
                                    {heroIcons.map( (icon,index) => (
                                        <li className="p-5" key={index}>
                                            <a href={icon.url} className="cursor-pointer"><img src={icon.icon} alt="icon" width={24} height={25}/></a>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax> 

                            <ScrollParallax isAbsolutelyPositioned>
                                <InstaProfile className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="abhijit_sahoo_7" />
                            </ScrollParallax>
                        </div>
                    </div>

                    <Gradient />
                </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]" >
                    <img src={heroBackground} alt="heroBackGround" className="w-full" width={1440} height={1800} />
                </div>
                <BackgroundCircles />
            </div>
            <TechStacks className="hidden relative z-10 mt-20 lg:block" />
        </div>
        <BottomLine />
    </Section>;
};

export default Hero;
