'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { experiences } from '@/data/experience';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience not found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {experience.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {experience.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Company</h2>
                <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h2>
                <p className="text-gray-600 dark:text-gray-300">{experience.location}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Period</h2>
                <p className="text-gray-600 dark:text-gray-300">{experience.period}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {experience.achievements && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Achievements</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(experience.email || experience.website) && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {experience.email && (
                    <a
                      href={`mailto:${experience.email}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Contact via Email
                    </a>
                  )}
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 