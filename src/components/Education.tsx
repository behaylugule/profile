import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Bachelor of Science in Electrical Engineering
          </h3>
          <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            Addis Ababa Science and Technology University
          </h4>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Field of Study:</span> Electrical and Computer Engineering (focus on Computer Engineering)
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Duration:</span> 05/09/2017 - 29/06/2022
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Final Grade:</span> 3.86
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Thesis:</span> Queue Management System (project)
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">National Classification:</span> EQF Level 6
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Type of Credits:</span> ECTS
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Number of Credits:</span> 300
              </p>
            </div>
            <div className="mt-6">
              <a
                href="http://www.aastu.edu.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Visit University Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 