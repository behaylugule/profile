import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-200">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            As an energetic full-stack software developer with more than three years of experience and a background in electrical and computer engineering, I bring a dynamic and enthusiastic approach to every project I undertake. With a solid foundation in both front-end and back-end development, I have successfully delivered robust and user-friendly software solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4 transition-colors duration-200">
            My versatile skill set, coupled with my passion for innovation, allows me to tackle complex challenges with enthusiasm and drive. I thrive in fast-paced environments and excel at collaborating with cross-functional teams to deliver high-quality code within tight deadlines.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4 transition-colors duration-200">
            With a relentless pursuit of excellence, I consistently strive to create scalable and efficient applications that push the boundaries of what is possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 