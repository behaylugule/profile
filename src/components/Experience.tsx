'use client';

import { useTheme } from '@/context/ThemeContext';
import { experiences } from '@/data/experience';
import Link from 'next/link';

export default function Experience() {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <Link
              key={experience.id}
              href={`/experience/${experience.id}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{experience.period}</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{experience.location}</p>
                <div className="mt-4">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {experience.responsibilities.slice(0, 2).map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                {experience.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        +{experience.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 