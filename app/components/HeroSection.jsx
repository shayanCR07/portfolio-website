"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../globals.css';


    
const HeroSection = () => {

    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: false, amount: 0.2 });





  return (
<section id='Home'>
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
        initial={{opacity: 0, scale:0.5}}
        animate={inView ? {opacity: 1, scale:1} : {opacity: 0, scale:0.5}}
        transition={{duration: 0.5}}
        className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-600'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
                sequence={[
        // Same substring at the start will only be typed out once, initially
                'Shayan Das',
                 1000,
                'Web Developer',
                 1000,
                'Learner',
                1000
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
            />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-l mb-6 font-display'>I am currently a 4th year B.tech student and passionate about different technologies to solve real world problems.
        </p> 
        <div >
            <a href="#contact" className='scroll-behavior: smooth;'>
            <button className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-cyan-400 to-purple-600 hover:bg-slate-200 text-white cursor-pointer'>Hire Me</button>
            </a>
            
            <a href="/resume.pdf" download>
            <button className='px-6 py-3 rounded-full bg-transparent w-full sm:w-fit border text-white hover:bg-slate-800 border-white mt-3 cursor-pointer'>Download Resume</button>
            </a>
        </div>
        </motion.div>
        
         <motion.div 
         ref={ref}
         initial={{opacity: 0, scale:0.5}}
         animate={inView ? {opacity: 1, scale:1} : {opacity: 0, scale:0.5}}
         transition={{duration: 0.5}}
         className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'> 
                <Image
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    src="/images/hero-image.png"
                    alt="hero-image"
                    width={300}
                    height={300}
                />
            </div> 
         </motion.div>
    </div>
    
</section>
  )
}

export default HeroSection
