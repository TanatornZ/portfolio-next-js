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
    <Section className="bg-blue-100">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tanatorn Intaphong</h1>
          <p className="mt-2">© All rights are reserved 2024</p>
        </div>
        <div className="flex gap-3">
          <Icon
            icon={<SiLeetcode size={24} color="orange" />}
            onClick={() => window.open("https://leetcode.com/u/TanatornZ/")}
          />
          <Icon
            icon={<FaLinkedin size={24} style={{ color: "0F66C2" }} />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tanatorn-intaphong-a3832a254/"
              )
            }
          />
          <Icon
            icon={<FaGithub size={24} />}
            onClick={() => window.open("https://github.com/TanatornZ")}
          />
        </div>
      </div>
    </Section>
  );
}

export default FooterSection;
