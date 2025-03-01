import { assets } from '../assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web App Development", "Website Design", "Application Development", "Custom Solutions"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="w-11/12 max-w-5xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col gap-4">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl font-Ovo"
        >
          Welcome to
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        >
          {`RS AI Soft`} <span className="txt-rotate"><span className="wrap">{text}</span></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-xl font-Ovo"
        >
          Welcome to RS AI Soft. We specialize in web app development, website design, application development, and custom solutions for your business.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          >
            Contact Us
          </motion.a>

         
        </div>
      </div>

      {/* Right Side - Floating Animated Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="w-full md:w-1/2 flex justify-center relative"
      >
        <Image 
          src="/mobile.png" 
          alt="Web Development Image" 
          className="w-64 md:w-80 floating-img"
          width={320} 
          height={320}
        />
      </motion.div>

      <style jsx>{`
        .floating-img {
          animation: updown 3s linear infinite;
        }

        @keyframes updown {
          0% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        .txt-rotate > .wrap {
          border-right: 0.08em solid #666;
          background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Header;
