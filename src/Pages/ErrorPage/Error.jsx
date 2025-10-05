import React from 'react';

const Error = () => {
    return (
     
            <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="text-center max-w-sm">
          {/* Icon */}
          <div className="flex justify-center">
            <span className="p-3 rounded-full bg-blue-50 dark:bg-gray-800 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 
                     9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn't exist. Here are some helpful
            links:
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center px-5 py-2 text-sm text-gray-700 bg-white border rounded-lg 
                        transition-colors duration-200 hover:bg-gray-100 
                        dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Go back
            </button>

            <a
              href="/"
              className="px-5 py-2 text-sm tracking-wide text-white bg-blue-500 rounded-lg 
                        transition-colors duration-200 hover:bg-blue-600 
                        dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Take me home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

   
export default Error;