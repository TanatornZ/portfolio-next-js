import { balloonElementList } from "@/constants/balloonElement";
import Image from "next/image";
import React from "react";
import profile from "../app/profile.jpg";
import BalloonElement from "./BalloonElement";
import Section from "./Section";

type Props = {};

function HomeSection({}: Props) {
  return (
    <Section className="h-dvh">
      <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5 z-50">
        <div className="size-52 rounded-full relative shadow-lg">
          <Image
            src={profile}
            fill
            alt="profile"
            className="rounded-full"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg p-3 md:p-4 gap-2 backdrop-blur-md bg-slate-200/30 shadow-sm">
          <h3 className="text-black text-lg md:text-xl">Tanatorn Intaphong</h3>
          <p className="text-slate-400 text-md">Website Developer</p>
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
            />
          );
        })}
    </Section>
  );
}

export default HomeSection;
