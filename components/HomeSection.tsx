"use client";
import { balloonElementList } from "@/constants/balloonElement";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profile from "@assets/image/profile.jpeg";
import BalloonElement from "./BalloonElement";
import Section from "./Section";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tilt from "react-parallax-tilt";

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
          <Tilt>
            <div className="size-52 rounded-full relative shadow-lg image opacity-0 flex justify-center items-center z-30">
              <div className="relative size-48 overflow-hidden rounded-full">
                <Image
                  placeholder="blur"
                  src={profile}
                  alt="profile"
                  fill
                  quality={100}
                  priority={true}
                  loading="eager"
                  className="rounded-full"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                ></Image>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col  justify-center items-center rounded-lg p-3 md:p-4 gap-2 bg-white shadow-lg box opacity-0 z-30">
              <h1 className="text-slate-900  inline-block font-semibold md:text-3xl">
                Tanatorn Intapong
              </h1>
              <p className="text-slate-600 text-sm md:text-lg font-medium anim-typewriter text-center">
                Software Engineer
              </p>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2  bg-white shadow-lg box opacity-0 z-30">
              <p className="text-slate-600 text-sm md:text-lg font-medium indent-6">
                I’m a Software Engineer specializing in React, Next.js, and
                Node.js. I focus on building reusable components, implementing
                efficient APIs, and writing clean, maintainable code. I aim to
                deliver reliable, user-focused features while continuously
                improving code quality and development workflows.
              </p>
            </div>
          </Tilt>
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
