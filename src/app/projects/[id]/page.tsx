'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project not found</h1>
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
          {project.image && (
            <div className="relative h-64 sm:h-96 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              {project.features && (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.challenges && (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Challenges & Solutions</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 