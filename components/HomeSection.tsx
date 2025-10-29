"use client";
import { balloonElementList } from "@/constants/balloonElement";
import Image from "next/image";
import React, { useRef } from "react";
import profile from "@assets/image/profile.jpg";
import BalloonElement from "./BalloonElement";
import Section from "./Section";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HomeSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      balloonElementList.map((element, index) => {
        gsap.to(`.balloon-${index}`, element.gsapAnimation || {});
      });

      gsap.fromTo(
        ".box",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, delay: 1 }
      );
      gsap.fromTo(
        ".image",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, delay: 0.5 }
      );
    },
    { scope: container }
  );
  return (
    <Section
      id="home-section"
      className="min-h-dvh bg-slate-100 flex justify-center items-center"
    >
      <div ref={container} className="pt-16">
        <div className="flex flex-col items-center mx-auto gap-5 z-30 max-w-5xl">
          <div className="size-52 rounded-full relative shadow-lg image opacity-0 z-30">
            <Image
              placeholder="blur"
              src={profile}
              fill
              alt="profile"
              className="rounded-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            ></Image>
          </div>
          <div className="flex flex-col  justify-center items-center rounded-lg p-3 md:p-4 gap-2 bg-white shadow-lg box opacity-0 z-30">
            <h1 className="text-slate-900  inline-block font-semibold md:text-3xl">
              Tanatorn Intapong
            </h1>
            <p className="text-slate-600 text-sm md:text-lg font-medium anim-typewriter text-center">
              Software Engineer
            </p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2  bg-white shadow-lg box opacity-0 z-30">
            <p className="text-slate-600 text-sm md:text-lg font-medium indent-6">
              I am a dedicated software engineer specializing in full-stack
              development since 2020. Passionate about building impactful
              software solutions that drive meaningful change, I excel at
              collaborating with cross-functional teams to deliver results that
              align with and enhance business objectives.
            </p>
          </div>
        </div>
        {balloonElementList &&
          balloonElementList.map((balloon, i) => {
            return (
              <BalloonElement
                key={`balloon-item-${i}}`}
                size={balloon.size}
                color={balloon.color}
                zIndex={balloon.zIndex || 0}
                right={balloon.right || 0}
                left={balloon.left || 0}
                bottom={balloon.bottom || 0}
                top={balloon.top || 0}
                className={`balloon-${i}`}
              />
            );
          })}
      </div>
    </Section>
  );
}

export default HomeSection;
