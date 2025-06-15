'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Behaylu Gule Gebrekidan
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 animate-fade-in-delay-1">
              Energetic Full-Stack Software Developer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-2">
              Delivering robust and user-friendly software solutions with a passion for innovation.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-delay-3">
              <a
                href="https://www.linkedin.com/in/behaylu-gule-72b17b211/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:behaylugule@gmail.com"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-300"
              >
                Contact Me
              </a>
              <button
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-delay-4">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/profile.jpg"
                alt="Behaylu Gule Gebrekidan"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 