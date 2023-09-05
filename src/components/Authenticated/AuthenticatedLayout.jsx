import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Notification } from '../Authenticated';
import * as Icon from '../../assets';
import { useSignOut, useAuthUser } from 'react-auth-kit';
import { initFlowbite } from 'flowbite';
import toast from 'react-hot-toast';
import axios from '../../api/axios';
import ThemeContext from '../../context/ThemeContext';
import StockContext from '../../context/StockContext';

const AuthenticatedLayout = () => {

  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const signOut = useSignOut();
  const shouldLoad = useRef(true);
  const auth = useAuthUser();
  const oauthToken = auth().token;
  const [user, setUser] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;

      toast.promise(
        axios
          .get('/v1/user/oauth/me', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${oauthToken}`
              },
              withCredentials: true
            })
          .then(res => {
            setUser(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
          }),
          {
            loading: 'Loading...',
            success: 'User fetched successfully',
            error: (err) =>
              err?.response?.data?.msg ?? 'Something is wrong, please try again',
          },
          {
            success: { duration: 5000 }
          }
      );

      initFlowbite();
    }
  },  []);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }} >
          <div className="antialiased bg-white dark:bg-gray-900">
            <nav className="bg-transparent px-4 py-2.5 fixed left-0 right-0 top-0 z-50 m-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                  
                  <a href="/overview" className="flex items-center justify-between mr-4">
                    <img
                      src={ Icon.logo }
                      className="mr-3 h-8"
                      alt="Griffin Logo"
                    />
                    <span className="self-center logo flex-none text-l font-semibold text-primary whitespace-nowrap dark:text-white">GRIFFIN</span>
                  </a>
                  {/* <form action="#" method="GET" className="hidden md:block md:pl-2">
                    <label htmlFor="topbar-search" className="sr-only">Search</label>
                    <div className="relative md:w-64 md:w-96">
                      <div
                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                      >
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="topbar-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                      />
                    </div>
                  </form> */}
                </div>
                <div className="flex items-center lg:order-2">
                  {/* <button
                    type="button"
                    data-drawer-toggle="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Toggle search</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                    </svg>
                  </button> */}
                  
                  {/* User */}
                  <button
                    type="button"
                    className="
                      flex mx-10 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4
                      focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    className="
                      hidden mr-4 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y
                      divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                    id="dropdown"
                  >
                    <div className="py-3 px-4">
                      <span
                        className="block text-sm font-semibold text-gray-900 dark:text-white"
                        >{user.username}</span
                      >
                      <span className="block text-sm text-gray-900 truncate dark:text-white">{user.email}</span
                      >
                    </div>
                    <ul
                      className="py-1 text-gray-700 dark:text-gray-300"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <a
                          href="/account"
                          className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          My profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                            Account settings
                        </a>
                      </li>
                    </ul>
                    <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                      <li>
                        <a
                          href="#"
                          onClick={() => signOut()}
                          className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End of user */}
                </div>
              </div>
            </nav>

            <main className="h-auto pt-0 mt-0">
              <Outlet />
            </main>
          </div>
        </StockContext.Provider>
      </ThemeContext.Provider>
    </>
  );

}

export default AuthenticatedLayout;