
import React from 'react';

export const Header: React.FC = () => (
  <header className="text-center">
    <div className="inline-flex items-center justify-center bg-green-500/10 p-3 rounded-full mb-4 border border-green-500/20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">
      Termux Command Generator
    </h1>
    <p className="mt-2 text-md text-gray-400">
      Describe what you want to do, and let AI generate the command for you.
    </p>
  </header>
);
