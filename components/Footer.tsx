'use client';

import {  Linkedin } from 'lucide-react';
import { SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-lg font-bold">
          &copy; 2024 Sumukh Joshi
        </div>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a
            href="https://x.com/SumukhJ224454" // Replace with your Twitter link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition duration-300"
          >
            <SlSocialTwitter size={20} />
            <span className="hidden md:inline">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sumukh-joshi-262515292/" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <Linkedin size={20} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
