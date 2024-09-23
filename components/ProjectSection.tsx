"use client";

import { projectList } from "@/constants/projectList";
import Image from "next/image";
import React from "react";
import Section from "./Section";

function ProjectSection() {
  return (
    <Section className="bg-slate-50">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-slate-800">
          Project
        </h1>
        <div className="mt-4 md:mt-8 grid gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="h-[280px] lg:h-[340px] rounded-lg w-full relative hover:opacity-90 group cursor-pointer overflow-hidden"
              onClick={() => {
                window.open(project.url);
              }}
            >
              <Image
                src={project.image}
                placeholder="blur"
                fill
                alt="profile"
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute translate-y-28 bottom-0 group-hover:translate-y-0 w-full h-1/3 bg-blue-100 rounded-b-lg p-2 md:p-4 opacity-100 transition-all duration-500 text-blue-950">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="py-3 px-4 rounded-md al bg-blue-500 hover:bg-blue-600 mt-4 font-semibold text-white hover:rounded-tl-[24px] hover:rounded-br-[24px] transition-all"
          onClick={() => {
            window.open("https://github.com/TanatornZ");
          }}
        >
          More Project
        </button>
      </div>
    </Section>
  );
}

export default ProjectSection;
