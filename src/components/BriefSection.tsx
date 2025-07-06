// src/components/AboutSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Your scroll animation wrapper
import { fadeInUp, staggerContainer } from "./animations/variants"; // Your animation variants

import AnimatedHighlightedWord from "./AnimatedHighlightedWord";
import GridPattern from "./GridPattern";

import FloatingImage from "./FloatingImage";
import aboutImage1 from "../assets/images/africa-symbols-ai.jpg";
import aboutImage2 from "../assets/images/ai-and-child.jpg";
import aboutImage3 from "../assets/images/data-connected-africa.jpg";
import aboutImage4 from "../assets/images/data-visualization-abstract.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Chip from "./Chip";
import { FiArrowRight } from "react-icons/fi";
import toast from "react-hot-toast";

const staticTextPartVariant = fadeInUp(0.7);

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BRIEF_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;


function BriefSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
  

    const validateForm = (data:string) => {
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   
      if (!emailRegex.test(data)) {
        toast.error('Please enter a valid email address.');
        return false;
      }

      return true;
    };
  
  const handleSubmit = async () => {
    
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error('EmailJS .env variables are not configured for contact form!');
      toast.error('Sorry, the contact form is currently unavailable.');
      return;
    }

    if (!validateForm(email)) return;

    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');

    try {


      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {from_email: email}, USER_ID);
      setEmail("");
      toast.success('Message sent successfully!', { id: toastId });
    } catch (error) {
      console.error('EmailJS FAILED...', error);
      toast.error('Oops! Something went wrong.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const briefList = [
    {
      id: 1,
      text: "Policy innovation through data",
    },
    {
      id: 2,
      text: "Responsible AI for the public good",
    },

    {
      id: 3,
      text: "Data monetization playbooks",
    },
    {
      id: 4,
      text: "Talent, ethics, and inclusion in the data economy",
    },
  ];

  return (
    <section
      id="brief"
      className=" bg-data-dark-bg relative overflow-hidden pt-40 "
    >
      <GridPattern />

      {/* Optional subtle background grid pattern */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedWrapper
          variants={fadeInUp(0.6)}
          className=" text-center lg:px-48"
        >
          <motion.h1 // This H1 will apply its fadeInUp to all direct children spans
            variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-data-text-main leading-tight tracking-tighter "
          >
            {/* Compose the headline */}
            <motion.span variants={staticTextPartVariant}>
              The&nbsp;
            </motion.span>

            <AnimatedHighlightedWord
              word="AYNA"
              highlightColorClass="bg-yellow-300/40" // Example different highlight
              textColorClass="text-data-accent"
              className="mx-1"
            />
            <motion.span variants={staticTextPartVariant}>
              &nbsp;Brief
            </motion.span>
          </motion.h1>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left Column: Text Content */}
          <AnimatedWrapper
            variants={staggerContainer(0.25, 0.1)}
            className="text-center lg:text-left relative z-10 order-2 lg:order-1   lg:py-0"
          >
            <motion.h3 // This H1 will apply its fadeInUp to all direct children spans
              variants={fadeInUp(0.7, 0.1)} // Overall animation for the H1 block
              className="text-2xl sm:text-5xl font-extrabold text-data-text-main leading-tight tracking-tighter mb-6"
            >
              {/* Compose the headline */}
              <motion.span variants={staticTextPartVariant}>
                {" "}
                Insights That Drive <br /> Data-Led&nbsp;
              </motion.span>

              <AnimatedHighlightedWord
                word="Transformation"
                highlightColorClass="bg-yellow-300/40" // Example different highlight
                textColorClass="text-data-accent"
                className="mx-1"
              />
            </motion.h3>

            <p className="text-data-text-muted text-base sm:text-xl leading-relaxed mb-4">
              Our thought leadership platform explores what&apos;s next for
              data, governance, AI, and transformation in Africa.
            </p>

            <p className="lg:ml-4">
              <ul className="text-data-text-muted lg:list-disc text-base sm:text-xl gap-4">
                {briefList?.map((brief, index) => (
                  <li key={index}>{brief?.text}</li>
                ))}
              </ul>
            </p>

            {/* <motion.div variants={fadeInUp(0.7, 0.1)} className="grid grid-col-1 md:grid-cols-2 gap-7">
              {
                briefList?.map((brief, id) => (
                  <div key={id} className="h-[10px] bg-tech-card-bg backdrop-blur-md border border-tech-card-border 
                  rounded-card-tech p-6 sm:p-8 shadow-card-tech-main max-w-[25rem]
                  flex flex-col justify-center items-center overflow-hidden group text-left text-sm
                  transition-all duration-300 ease-out hover:shadow-brand-yellow/50 hover:border-white/20  ">
                      <div
        className={`absolute inset-0 bg-brand-yellow/10  opacity-30  group-hover:opacity-50 transition-opacity duration-300 -z-10`}
      ></div>
                    {brief?.text}
                  </div>
                ))
              }
            </motion.div> */}

            <div className="w-full pt-5 flex lg:justify-start justify-center">
              <Button
                size="lg"
                label="Visit The AYNA Brief"
                onClick={() => navigate("/about")}
              />
            </div>

            <div className="w-[80%] h-14 flex justify-between overflow-hidden border border-white rounded-full mt-7">
              <input
                type="text"
                aria-label="subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none pl-6 pr-5"
                placeholder="Your Email Address"
              />

              <div onClick={handleSubmit} className="w-[40%] text-[0.8rem] gap-1 h-full flex rounded-full cursor-pointer bg-brand-yellow group justify-center items-center text-data-dark-bg">
                <p>Subscribe For Updates</p>
                <FiArrowRight
                  className={` w-4 h-4 transform  group-hover:-rotate-[50deg] ease-in-out duration-200`}
                />
              </div>
            </div>
          </AnimatedWrapper>
          {/* Right Column: Floating Images Area */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] order-1 lg:order-2  pointer-events-none lg:pointer-events-auto">
            {/* Note: pointer-events-none on parent can be tricky if images should be clickable later */}
            {/* Image 1 - Largest, slightly back */}
            <FloatingImage
              src={aboutImage1}
              alt="Dynamic team working"
              className="w-[60%] sm:w-[55%] md:w-[280px] lg:w-[320px] top-[5%] left-[10%] lg:left-[5%] z-10"
              rotate={-5}
              floatDelay={0.1}
              aspectRatio="aspect-[4/3]"
            />
            {/* Image 2 - Medium, middle ground */}
            <FloatingImage
              src={aboutImage2}
              alt="Creative process sketches"
              className="w-[50%] sm:w-[45%] md:w-[240px] lg:w-[280px] top-[30%] right-[5%] lg:right-[10%] z-20"
              rotate={8}
              floatDelay={0.3}
              aspectRatio="aspect-square"
            />
            {/* Image 3 - Smaller, foreground */}
            <FloatingImage
              src={aboutImage3}
              alt="Modern office vibe"
              className="w-[40%] sm:w-[35%] md:w-[200px] lg:w-[220px] bottom-[10%] left-[25%] lg:left-[20%] z-30"
              rotate={-3}
              floatDelay={0.5}
              aspectRatio="aspect-[3/4]"
            />
            {/* Image 4 - Small accent image */}
            <FloatingImage
              src={aboutImage4}
              alt="Abstract data visualization"
              className="w-[30%] sm:w-[25%] md:w-[160px] lg:w-[180px] top-[65%] right-[20%] lg:right-[25%] z-0 opacity-80" // Behind others
              rotate={12}
              floatDelay={0.2}
              aspectRatio="aspect-video"
            />
            {/* Image 2 - Medium, middle ground */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BriefSection;
