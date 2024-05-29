"use client";

import React from "react";
import { Chart } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  BarElement,
  ChartOptions,
} from "chart.js";
import { cx } from "@emotion/css";
import flutter from "@assets/icons/flutter.webp";
import mongoDB from "@assets/icons/mongodb.svg";
import nestJs from "@assets/icons/nestJs.png";
import Image, { StaticImageData } from "next/image";

type Props = {};

function SkillSection({}: Props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
  );

  const options: ChartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (this, chart) {
            const value = chart.formattedValue as unknown as number;
            switch (Number(value)) {
              case 1:
                return "Beginner";
              case 2:
                return "Average";
              case 3:
                return "Cool Guy";
              case 4:
                return "Rock star";
            }
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            switch (value) {
              case 1:
                return "Beginner";
              case 2:
                return "Average";
              case 3:
                return "Cool Guy";
              case 4:
                return "Rock star";
            }
          },
        },
      },
    },
  };

  const otherSkills: { name: string; image: StaticImageData }[] = [
    { name: "Nest Js", image: nestJs },
    { name: "Mongo DB", image: mongoDB },
    { name: "Flutter", image: flutter },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col py-8 md:py-12 justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-slate-800">
        Main Skill
      </h1>
      <div className="w-full p-4 py-8 xl:pt-16">
        <Chart
          type={"bar"}
          options={options}
          data={{
            labels: ["HTML", "CSS", "JS", "TS", "ReactJs", "NextJs"],
            datasets: [
              {
                data: [2, 2, 3, 3, 4, 3],
                borderWidth: 1,
                backgroundColor: [
                  "rgba(252,73,10,0.8)",
                  "rgba(33,150,243,0.8)",
                  "rgba(254,223,0,0.8)",
                  "rgba(48,120,198,0.8)",
                  "rgba(90,218,253,0.8)",
                  "rgba(0,0,0,0.8)",
                ],
                borderRadius: 4,
              },
            ],
          }}
        />
      </div>

      <div className="mx-auto md:mt-8">
        <h3 className="text-center text-2xl font-semibold">Other Skill</h3>
        <div className="flex gap-4 md:gap-12 mt-8">
          {otherSkills.map((skill, index) => (
            <div
              className="flex flex-col gap-2 items-center"
              key={`skill-order-${index}`}
            >
              <div className={cx("w-10 md:w-14 h-10 md:h-14 relative")}>
                <Image
                  src={skill.image}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt={`skill-order-${index}`}
                />
              </div>
              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
