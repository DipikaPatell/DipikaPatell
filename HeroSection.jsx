import React from 'react';
import { ArrowRight } from 'lucide-react';
import image from '../assets/profile-pic.png';

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Main container */}
      <div className="relative w-full h-screen flex items-center">
        {/* Yellow background */}
        <div className="absolute left-0 top-0 h-full w-[30%] bg-[#ffb400]" />
        
        {/* Content wrapper */}
        <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-between relative z-10">
          {/* Left side - Image */}
          <div className="w-[45%]">
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src={image}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-[45%]">
            <h1 className="flex flex-col gap-2">
              <span className="text-[#ffb400] text-5xl font-bold">— I'M STEVE MILNER.</span>
              <span className="text-white text-4xl font-bold">WEB DESIGNER</span>
            </h1>
            <p className="text-gray-300 text-lg my-8">
              I'm a Tunisian based web designer & front-end developer focused on
              crafting clean & user-friendly experiences. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <button className="flex items-center gap-2 bg-[#ffb400] text-black px-8 py-4 rounded-full hover:bg-[#ffb400]/90 transition-all">
              <span className="font-medium">MORE ABOUT ME</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Side Navigation */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <a href="#" className="w-12 h-12 bg-[#ffb400] rounded-full flex items-center justify-center text-black hover:scale-110 transition-all">
            <HomeIcon />
          </a>
          {[UserIcon, BriefcaseIcon, MailIcon].map((Icon, index) => (
            <a 
              key={index}
              href="#" 
              className="w-12 h-12 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white hover:bg-[#ffb400] hover:text-black hover:scale-110 transition-all"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button className="fixed top-8 right-8 w-12 h-12 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white hover:bg-[#ffb400] hover:text-black transition-all">
          <SunIcon />
        </button>
      </div>
    </div>
  );
};

// Icon components remain the same as in your original code
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
  </svg>
);

export default HeroSection;