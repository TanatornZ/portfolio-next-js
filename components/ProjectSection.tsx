"use client";

import { projectList } from "@/constants/projectList";
import Image from "next/image";
import React from "react";

type Props = {};

function ProjectSection({}: Props) {
  return (
    <div className="w-full bg-slate-50 p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center">Project</h1>
        <div className="mt-4 md:mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="h-[280px] lg:h-[340px] rounded-lg w-full bg-slate-400 relative hover:opacity-70 group cursor-pointer"
              onClick={() => {
                window.open(project.url);
              }}
            >
              <Image
                src={project.image}
                fill
                alt="profile"
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute hidden bottom-0 group-hover:block w-full h-1/3 bg-slate-300 rounded-b-lg p-2 text-black opacity-100">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="py-3 px-4 rounded-md al bg-blue-600 hover:bg-blue-500 mt-4 font-semibold text-white"
          onClick={() => {
            window.open("https://github.com/TanatornZ");
          }}
        >
          More Project
        </button>
      </div>
    </div>
  );
}

export default ProjectSection;
