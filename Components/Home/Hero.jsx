"use client";

import Image from "next/image";
import React from "react";
import image from "@/public/doctors.jpg";
import Link from "next/link";
import { FaBusinessTime } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-30"></div>

      {/* Dark Overlay */}
     

      {/* Main Content */}
      <div className="relative z-10 w-11/12 mx-auto min-h-screen flex items-center">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 w-full">

          {/* Text Section */}
          <div className="space-y-5 text-center md:text-left ">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Doctors <span className="text-cyan-400">Point</span>
            </h1>

            <p className="text-white bg-cyan-400 w-fit px-4 py-1 rounded-full mx-auto md:mx-0">
              A great hospitality which everyone deserves
            </p>

            <p className="max-w-xl ">
              DoctorPoint helps you easily find trusted doctors and
              book appointments online. Get fast access to quality
              healthcare anytime, anywhere.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 md:justify-start justify-center flex-wrap">
              <Link
                href="/"
                className="rounded-full border-2 border-cyan-400 text-cyan-400 px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/40"
              >
                <FaBusinessTime />
                Appointment
              </Link>

              <Link
                href="/"
                className="rounded-full border-2 border-cyan-400 text-cyan-400 px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/40"
              >
                <FaUserDoctor />
                Doctor
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">

            {/* Decorative Icon 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className="absolute top-0 left-0 z-10 opacity-80"
            >
              <Image
                src="/stathoscope.png"
                width={80}
                height={80}
                alt="stethoscope"
              />
            </motion.div>

            {/* Decorative Icon 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className="absolute bottom-0 right-0 z-10 opacity-80"
            >
              <Image
                src="/doctrsign.png"
                width={80}
                height={80}
                alt="doctor sign"
              />
            </motion.div>

            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: 0,
                rotate: 0,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="w-full max-w-md md:max-w-lg"
            >
              <Image
                src={image}
                alt="doctors"
                className="rounded-3xl object-cover w-full shadow-2xl shadow-cyan-500/20"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;