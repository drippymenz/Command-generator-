
import React, { useState, useEffect } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CommandOutputProps {
  command: string;
  isLoading: boolean;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({ command, isLoading }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (command) {
      setIsCopied(false);
    }
  }, [command]);

  const handleCopy = () => {
    if (!command) return;
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
      );
    }

    if (!command) {
      return <span className="text-gray-500">Your generated command will appear here...</span>;
    }

    return (
      <pre className="whitespace-pre-wrap break-words">
        <code className="font-mono text-green-400">
          <span className="text-gray-500 mr-2">$</span>
          {command}
        </code>
      </pre>
    );
  };

  return (
    <div className="mt-8">
      <div className="relative bg-black rounded-lg p-4 min-h-[100px] flex items-center border border-gray-800 shadow-inner">
        <div className="w-full">{renderContent()}</div>
        {command && !isLoading && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Copy command"
          >
            {isCopied ? (
              <CheckIcon className="w-5 h-5 text-green-400" />
            ) : (
              <CopyIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
