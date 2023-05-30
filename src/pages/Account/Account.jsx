import React, { useState, useEffect, useRef } from "react";
import { useAuthUser } from 'react-auth-kit'
import toast, { Toaster } from 'react-hot-toast';
import { LinkedBrokers } from "../../components/Authenticated";

const AccountPage = () => {

  const [loading, setLoading] = useState(true);
  const shouldLoad = useRef(true);
  const auth = useAuthUser();
  const oauthToken = auth().token;
  const [user, setUser] = useState({});

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;

      setUser(JSON.parse(localStorage.getItem('user')));
      setTimeout(() => {
        setLoading(false);
      
      }, 5000);
    }
  }, []);

  return (
    <>

      <Toaster />
      
      <div className="grid grid-cols-4 gap-4">
        <div className="
          w-full p-6 bg-white border border-gray-200 rounded-lg 
          shadow dark:bg-gray-800 dark:border-gray-700 mt-16 col-span-4
          "
        >
          <div className="flex">
            {loading
              ? (
                <div role="status" className="space-y-4 animate-pulse md:space-y-4 md:space-x-3 md:flex md:items-center">
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded dark:bg-gray-700 mx-2">
                    <svg 
                      className="w-12 h-12 text-gray-100" 
                      xmlns="http://www.w3.org/2000/svg" 
                      aria-hidden="true" fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              )
              : (<>
                  <div className="flex-none mx-2">
                    <img 
                      className="w-20 h-20 rounded" 
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                      alt={`${user.username}-avatar`} 
                    />
                  </div>
                  <div className="flex-none mx-2">
                    <div className="h-20 grid grid-cols-1 gap-0.50 content-center">
                      <div><h1 className="text-lg font-semibold">{user.username}</h1></div>
                      <div><span className="text-sm text-gray-600 dark:text-gray-400">{user.email}</span></div>
                    </div>
                  </div>
                </>
              )
            }
            
            <div className="flex-1 mx-2"></div>
            <div className="flex-none mx-2">
              <div className="h-20 grid grid-cols-1 gap-0.50 content-center">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <LinkedBrokers />

        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 col-span-2">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-600 dark:text-white">Platform Settings</h5>
          
          <div className="grid grid-cols-1 gap-0.50 content-center my-4">
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="
                w-11 h-6 bg-gray-200 peer-focus:outline-none 
                peer-focus:ring-4 peer-focus:ring-white 
                dark:peer-focus:ring-blue-800 rounded-full 
                peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                peer-checked:after:border-white after:content-[''] after:absolute 
                after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                dark:border-gray-600 peer-checked:bg-primary"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email me when a position is sold
              </span>
            </label>

            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="
                w-11 h-6 bg-gray-200 peer-focus:outline-none 
                peer-focus:ring-4 peer-focus:ring-white 
                dark:peer-focus:ring-blue-800 rounded-full 
                peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                peer-checked:after:border-white after:content-[''] after:absolute 
                after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                dark:border-gray-600 peer-checked:bg-primary"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email me when a position touches the stop loss
              </span>
            </label>
          </div>
        </div>

        

      </div>

    </>
  );
};

export default AccountPage;