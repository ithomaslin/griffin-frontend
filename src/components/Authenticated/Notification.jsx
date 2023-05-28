import React from 'react';

const Notification = ({ strategyId, ticker, timestamp, positionId, imageUri, price }) => {
  const sec = Math.floor((timestamp) / 1000);
  const min = Math.floor(sec / 60);
  
  return (
    <a href={ `/strategy/${strategyId}/position/${positionId}` } className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
      <div className="flex-shrink-0">
        <img
          className="w-11 h-11 rounded-full"
          src={ imageUri || "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" }
          alt="Jese Leos avatar"
        />
        <div className="
          flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 
          bg-gray-900 rounded-full border border-white dark:border-gray-700">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="
              M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 
              016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 
              0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
        </div>
      </div>
      <div className="pl-3 w-full">
        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
          Your position for <span className="font-semibold text-gray-900 dark:text-white">{ ticker }</span>
          &nbsp;is closed at&nbsp;
          <span className="font-medium text-gray-900 dark:text-white">{ price }</span>.
        </div>
        <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
          { min === 0 ? "Just now" : min + ` minute${min > 1 ? "s" : ""} ago` }
        </div>
      </div>
    </a>
  );
}

export default Notification;