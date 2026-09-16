import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { MdDns } from "react-icons/md";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React JS",
    icon: RiReactjsLine,
  },
  {
    skill: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    skill: "Git",
    icon: FaGit,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Flask",
    icon: FaFlask,
  },
  {
    skill: "WordPress",
    icon: FaWordpress,
  },
  {
    skill: "Elementor",
    icon: SiElementor,
  },
  {
    skill: "WooCommerce",
    icon: SiWoocommerce,
  },
  {
    skill: "Linux",
    icon: FaLinux,
  },
  {
    skill: "Server Admin",
    icon: FaServer,
  },
  {
    skill: "DNS & Domains",
    icon: MdDns,
  },
];

const AllSkillsSm = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-5xl text-orange " />
            <p className="text-center mt-4 text-lg font-medium text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
