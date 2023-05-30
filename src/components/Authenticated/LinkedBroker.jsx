import React, { useState, useEffect, useRef } from "react";
import { createPopper } from '@popperjs/core';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { toast } from "react-hot-toast";

const LinkedBrokers = () => {

  const [brokers, setBrokers] = useState([]);
  const [selectedBroker, setSelectedBroker] = useState(null);
  const shouldLoad = useRef(true);
  const tableHeaderStype = {
    'backgroundColor': '#f9fafb',
    'color': '#333333', 
    'textTransform': 'uppercase'
  };

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;

      const newBroker = {
        id: 123,
        name: "TD Ameritrade",
        type: "Stock",
        country: "US",
        description: "TD Ameritrade Stock account",
        status: true
      }
      setBrokers(prevData => [...prevData, newBroker]);
    }
  }, []);

  return (
    <>
      <div className="
        w-full p-6 bg-white border border-gray-200 rounded-lg 
        shadow dark:bg-gray-800 dark:border-gray-700 col-span-4
        "
      >
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-600 dark:text-white">Connected Brokers</h5>
        
        <div className="grid grid-cols-1 gap-0.50 content-center my-4">
          <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">{/* This is for spacing */}</div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <button 
                    type="button"
                    data-modal-target="broker-connect-modal" 
                    data-modal-toggle="broker-connect-modal"
                    className="
                      flex items-center justify-center text-white bg-primary 
                      hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
                      font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 
                      dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800
                    "
                  >
                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Add broker
                  </button>
                  <div className="flex items-center space-x-3 w-full md:w-auto">
                    <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                      <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                      Actions
                    </button>
                    <div id="actionsDropdown" style={{ margin: 0 }} className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                        <li>
                          <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bulk Edit</a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="overflow-x-auto">
              <DataTable 
                value={brokers}
                tableStyle={{ minWidth: '100%' }} 
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <Column field="id" header="ID" className="px-4 py-3" headerStyle={tableHeaderStype}></Column>
                <Column field="type" header="Broker type" className="px-4 py-3" headerStyle={tableHeaderStype}></Column>
                <Column field="country" header="Country" className="px-4 py-3" headerStyle={tableHeaderStype}></Column>
                <Column field="description" header="Description" className="px-4 py-3" headerStyle={tableHeaderStype}></Column>
                <Column field="status" header="Status" className="px-4 py-3" headerStyle={tableHeaderStype}></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main modal --> */}
      <div id="broker-connect-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="broker-connect-modal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                      <form className="space-y-6" action="#">
                          <div>
                              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                          </div>
                          <div>
                              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                          </div>
                          <div className="flex justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                  </div>
                                  <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                              </div>
                              <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                          </div>
                          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                              Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div> 

    </>
  );
}

export default LinkedBrokers;