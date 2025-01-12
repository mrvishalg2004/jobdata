import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl font-bold">Developed by Vishal Golhar</h3>
          <div className="flex space-x-6">
            <a
              href="https://github.com/mrvishalg2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalgolhar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://vishalcv.live"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
