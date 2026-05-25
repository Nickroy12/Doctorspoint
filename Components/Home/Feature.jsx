import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";

const Feature = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto relative py-16">
      
      {/* Feature Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-8 bg-cyan-300/40 backdrop-blur-lg shadow-lg p-3 md:p-6 rounded-[32px] absolute md:-top-20 -top-4 w-full">
        
        {/* Card 1 */}
        <div className="group flex flex-col items-center justify-center bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-md hover:-translate-y-2 hover:shadow-cyan-300/50 transition-all duration-300">
          
          <IoShieldCheckmarkOutline className="text-2xl md:text-5xl text-gray-700 group-hover:text-cyan-500 transition duration-300" />

          <h2 className="text-xs md:text-2xl font-semibold text-center mt-2 md:mt-4 text-gray-800">
            Monthly Checkup
          </h2>

          <p className="hidden md:block text-gray-500 text-center mt-3 leading-relaxed">
            Regular health checkups to keep you safe and healthy all the time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center justify-center bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-md hover:-translate-y-2 hover:shadow-cyan-300/50 transition-all duration-300">
          
          <FaUserDoctor className="text-2xl md:text-5xl text-gray-700 group-hover:text-cyan-500 transition duration-300" />

          <h2 className="text-xs md:text-2xl font-semibold text-center mt-2 md:mt-4 text-gray-800">
            Expert Doctors
          </h2>

          <p className="hidden md:block text-gray-500 text-center mt-3 leading-relaxed">
            Qualified and experienced doctors ready to serve you anytime.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center justify-center bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-md hover:-translate-y-2 hover:shadow-cyan-300/50 transition-all duration-300">
          
          <FaBusinessTime className="text-2xl md:text-5xl text-gray-700 group-hover:text-cyan-500 transition duration-300" />

          <h2 className="text-xs md:text-2xl font-semibold text-center mt-2 md:mt-4 text-gray-800">
            24/7 Service
          </h2>

          <p className="hidden md:block text-gray-500 text-center mt-3 leading-relaxed">
            We are always available for emergency and patient support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Feature;