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
    <Section className="h-dvh bg-slate-100">
      <div ref={container}>
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5 z-50">
          <div className="size-52 rounded-full relative shadow-lg image opacity-0">
            <Image
              placeholder="blur"
              src={profile}
              fill
              alt="profile"
              className="rounded-full"
              style={{ objectFit: "cover", objectPosition: "center" }}
            ></Image>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2 backdrop-blur-md bg-white shadow-lg box opacity-0">
            <h1 className="text-slate-900 font-semibold md:text-3xl">
              Tanatorn Intaphong
            </h1>
            <p className="text-slate-600 text-sm md:text-lg">
              Front-end Developer
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
