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
        <div className="flex flex-col items-center mx-auto gap-5 z-30 w-3/4 max-w-5xl">
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
          <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2 bg-white shadow-lg box opacity-0 z-30">
            <h1 className="text-slate-900 font-semibold md:text-3xl">
              Tanatorn Intapong
            </h1>
            <p className="text-slate-600 text-sm md:text-lg font-medium">
              Software Engineer
            </p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2  bg-white shadow-lg box opacity-0 z-30">
            <p className="text-slate-600 text-sm md:text-lg font-medium indent-6">
              I’m a dedicated software engineer with hands-on experience in web
              technologies since 2020. Throughout my journey, I’ve been focused
              on building meaningful and impactful software that makes a
              difference. I’m always excited to collaborate with like-minded
              professionals to create solutions that benefit others. Let’s build
              something great together!
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
