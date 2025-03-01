import { assets } from '../assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[10%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Us
      </motion.h2>

      {/* Row Layout: Image - Chat Bubbles - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-10 my-20 items-center w-full"
      >
        {/* Left Image (Same size as Right Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-[350px] h-[350px]"
        >
          <Image
            src={assets.user_image}
            alt="user-image"
            width={350}
            height={350}
            className="rounded-3xl w-full h-full object-cover"
          />
        </motion.div>

        {/* Chat Bubble Descriptions in Middle with margin */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6 w-full max-w-2xl mx-4" // Added mx-4 for margin on both sides
        >
          {/* First Chat Bubble (Pointing to Left Image) */}
          <div className="relative bg-blue-200 text-gray-700 dark:text-white p-6 rounded-2xl shadow-md">
            <p>
              9 years of experience in AI and computer vision, specializing in network traversal and streaming protocols. Built AI models like face mask detection, wheelchair detection, and retail food classification.
            </p>
            <div className="absolute -left-4 top-4 w-6 h-6 bg-blue-200 transform rotate-45"></div>
          </div>

          {/* Second Chat Bubble (Pointing to Right Image) */}
          <div className="relative bg-blue-200 text-gray-700 dark:text-white p-6 rounded-2xl shadow-md self-end">
            <p>
              Expert in Next.js, React, Python, ASP.NET, AI, and NLP. IEEE-published author with experience in chatbot development and multi-vendor platforms. Certified by MINDSPARKS'20 for Line Following Robot.
            </p>
            <div className="absolute -right-4 top-4 w-6 h-6 bg-blue-200 transform rotate-45"></div>
          </div>
        </motion.div>

        {/* Right Image (Same size as Left Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-[350px] h-[350px]"
        >
          <Image
            src={assets.user_image1}
            alt="user-image1"
            width={350}
            height={350}
            className="rounded-3xl w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
