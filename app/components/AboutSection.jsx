"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import about from "../About.jpg"
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Languages",
    id: "Languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, Java Script</li>
        <li>React, Node.js, Express.js, Mongo DB, Tailwind-CSS </li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT (Currently in 4th yr)</li>
        <li>TILJALA HIGH SCHOOL</li>
        <li>ST.PETER'S HIGH SCHOOL</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development using mern (Euphoria Genx)</li>
        <li>Data Science Artificial Itelligent and Machine Learning Using Python(Ardent Computech)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2  });
  const cardVariants = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };





  const [tab, setTab] = useState("Languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-0.5" id="about" ref={ref}>
      <div  className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.9 }}>
        <Image src={about} alt="about" width={500} height={500}/>
      </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-5">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Languages")}
              active={tab === "Languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <motion.div 
              ref={ref}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.9 }}
              className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;