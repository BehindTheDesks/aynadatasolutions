import React, { useState } from "react";
import AnimatedHighlightedWord from "../components/AnimatedHighlightedWord";
import { motion } from "framer-motion";
import { fadeInUp } from "../components/animations/variants";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FiArrowRight } from "react-icons/fi";
import Chip from "../components/Chip";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BRIEF_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const BriefPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (data: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error(
        "EmailJS .env variables are not configured for contact form!"
      );
      toast.error("Sorry, the contact form is currently unavailable.");
      return;
    }

    if (!validateForm(email)) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_email: email },
        USER_ID
      );
      setEmail("");
      toast.success("Message sent successfully!", { id: toastId });
    } catch (error) {
      console.error("EmailJS FAILED...", error);
      toast.error("Oops! Something went wrong.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const articleTypes = [
    {
      id: 0,
      name: "Public sector innovation with data",
    },

    {
      id: 0,
      name: "Data monetization strategies",
    },

    {
      id: 0,
      name: "AI deployment in complex environments",
    },

    {
      id: 0,
      name: "Talent, governance, and digital transformation",
    },
  ];

  return (
    <section
      id="brief-page"
      className="min-h-screen flex items-center bg-data-dark-bg py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
            className="text-5xl sm:text-6xl md:text-7xl text-center font-extrabold text-data-text-main leading-tight tracking-tighter mb-5 mt-7"
          >
            Insights That&nbsp;
            <AnimatedHighlightedWord
              word="Drive"
              highlightColorClass="bg-yellow-200/50" // Example different highlight
              textColorClass="text-brand-yellow" // Ensure data-accent is defined
              className="mx-1"
            />
            <br />
            Impact.
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.7, 0.2)} // Staggered delay
            className="text-base sm:text-lg md:text-xl text-data-text-muted text-center font-light mx-auto lg:mx-0 leading-relaxed"
          >
            The data space is evolving and so are the possibilities.
          </motion.p>

          <motion.p
            variants={fadeInUp(0.7, 0.2)} // Staggered delay
            className="text-base sm:text-lg md:text-xl text-data-text-muted text-center font-light max-w-3xl mx-auto lg:mx-0 lg:mt-5 leading-relaxed"
          >
            The AYNA Brief shares what we&apos;re learning, building, and
            thinking about across Africa&apos;’s data landscape. From practical
            how-tos to policy-shaping ideas, our goal is simple: to help you
            turn information into impact
          </motion.p>

          <div className="w-full lg:w-[40%] h-14 flex justify-between overflow-hidden border border-white rounded-full mt-7">
            <input
              type="text"
              aria-label="subscribe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none pl-6 pr-5"
              placeholder="Your Email Address"
            />

            <div
              onClick={handleSubmit}
              className="w-[40%] text-[0.8rem] gap-1 h-full flex rounded-full cursor-pointer bg-brand-yellow group justify-center items-center text-data-dark-bg"
            >
              <p>Subscribe For Updates</p>
              <FiArrowRight
                className={` w-4 h-4 transform  group-hover:-rotate-[50deg] ease-in-out duration-200 hidden lg:inline-block`}
              />
            </div>
          </div>

          <motion.h1
            variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
            className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold max-w-3xl mt-40 text-data-text-main leading-tight tracking-tighter mb-5"
          >
            <AnimatedHighlightedWord
              word="Explore"
              highlightColorClass="bg-yellow-200/50" // Example different highlight
              textColorClass="text-brand-yellow" // Ensure data-accent is defined
              className="mx-1"
            />
            &nbsp;articles, case studies, toolkits, and briefs covering:
          </motion.h1>

          <div className="flex gap-x-5 gap-y-3 flex-wrap justify-center max-w-2xl mt-5">
            {articleTypes?.map((type, index) => (
              <Chip label={type?.name} key={index} textSize="sm" />
            ))}
          </div>
          <motion.p
            variants={fadeInUp(0.7, 0.2)} // Staggered delay
            className="text-base sm:text-lg md:text-xl text-data-text-muted text-center font-light max-w-2xl mx-auto lg:mx-0 mt-5 leading-relaxed"
          >
            Whether you're a policymaker, business leader, or transformation
            lead — this is your space to stay ahead of the curve.
          </motion.p>

          <motion.h1
            variants={fadeInUp(0.7, 0)} // Delay 0 for first element in stagger
            className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold max-w-3xl mt-40 text-data-text-main leading-tight tracking-tighter mb-5"
          >
            Want&nbsp;
            <AnimatedHighlightedWord
              word="insights"
              highlightColorClass="bg-yellow-200/50" // Example different highlight
              textColorClass="text-brand-yellow" // Ensure data-accent is defined
              className="mx-1"
            />
            &nbsp;like these delivered straight to your inbox?
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.7, 0.2)} // Staggered delay
            className="text-base sm:text-lg md:text-xl text-data-text-muted text-center font-light max-w-2xl mx-auto lg:mx-0 lg:mt-5 leading-relaxed"
          >
            Subscribe to our newsletter for early access to thought pieces,
            white papers, and practical tools for driving data-led
            transformation.
          </motion.p>

          <div className="w-full lg:w-[40%] h-14 flex justify-between overflow-hidden border border-white rounded-full mt-7">
            <input
              type="text"
              aria-label="subscribe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none pl-6 pr-5"
              placeholder="Your Email Address"
            />

            <div
              onClick={handleSubmit}
              className="w-[40%] text-[0.8rem] gap-1 h-full flex rounded-full cursor-pointer bg-brand-yellow group justify-center items-center text-data-dark-bg"
            >
              <p>Subscribe For Updates</p>
              <FiArrowRight
                className={` w-4 h-4 transform  group-hover:-rotate-[50deg] ease-in-out duration-200 hidden lg:inline-block`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefPage;
