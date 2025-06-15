'use client';

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Javascript/Typescript', 'Node', 'Express'],
    },
    {
      title: 'Frontend',
      skills: ['JavaScript', 'React Js', 'Next Js', 'Vue Js', 'Vue-router', 'Vuex', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 