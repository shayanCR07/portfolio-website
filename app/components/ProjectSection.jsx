"use client"
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion';



const projectsData = [
    {
      id: 1,
      title: "Dashboard of an E-commerce Website",
      description: "A responsive admin dashboard panel website",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/shayanCR07/Admin-Panel-Dashboard-of-Ecommerce-website",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "An AI image generator website with user given prompt. Make your imagination in real!",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/shayanCR07/Text-to-image-generator",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "MY another Portfolio using HTML,CSS",
      description: "My portfolio website using only HTML and CSS",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/shayanCR07/Portfolio",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Uber Clone",
      description: "An Uber app simulation using MERN Stack",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/shayanCR07/Uber-Clone",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "A Blog Website",
      description: "A Blog Posting Website Using MERN",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/shayanCR07/my-blog",
      previewUrl: "/",
    }
];



const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2});
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };





  return (
    <section className="text-white mt-5 py-5" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-5 mb-8 md:mb-12">My Projects</h2>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
      { projectsData.map((project,index) => (
        <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              target='_blank'
              // previewUrl={project.previewUrl}
            />
        </motion.li>))}
      </ul>
    </section>
  )
}

export default ProjectSection
