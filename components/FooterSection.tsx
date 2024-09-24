"use client";
import React from "react";
import Section from "./Section";
import Icon from "./Icon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type Props = {};

function FooterSection({}: Props) {
  return (
    <Section id="footer-section" className="bg-blue-50">
      <div className="w-full max-w-6xl mx-auto">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">
              Tanatorn Intapong
            </h1>
          </div>
          <div className="flex md:gap-1">
            <Icon
              icon={<SiLeetcode size={24} color="orange" />}
              onClick={() => window.open("https://leetcode.com/u/TanatornZ/")}
            />
            <Icon
              icon={<FaLinkedin size={24} style={{ color: "0F66C2" }} />}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tanatorn-Intapong-a3832a254/"
                )
              }
            />
            <Icon
              icon={<FaGithub size={24} />}
              onClick={() => window.open("https://github.com/TanatornZ")}
            />
          </div>
        </div>
        <p className="mt-2 text-sm">© All rights are reserved 2024</p>
      </div>
    </Section>
  );
}

export default FooterSection;
