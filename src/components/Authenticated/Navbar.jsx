import react, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { useSignOut, useAuthUser } from 'react-auth-kit';

const Navbar = ({ user }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const signOut = useSignOut();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="bg-transparent px-4 py-2.5 fixed left-0 right-0 top-0 z-50 m-4 ml-64 lg:block md:hidden sm:hidden">
        <div className="flex flex-wrap justify-end items-center">
          <div className="flex items-center lg:order-2">
            {/* User */}
            <button
              type="button"
              className="
                flex mx-10 text-sm bg-gray-800 rounded-full border-2 border-accent md:mr-0
              "
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
                hidden mr-4 z-50 my-4 w-56 text-base list-none bg-white rounded-lg divide-y
                divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">{user.username}</span>
                <span className="block text-sm text-gray-900 truncate dark:text-white">{user.email}</span
                >
              </div>
              <ul
                className="py-1 text-gray-700 dark:text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a href="/account" className="block py-2 px-4 text-sm hover:text-secondary dark:hover:text-secondary">
                    My profile
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleDarkMode} className="block py-2 px-4 text-sm hover:text-secondary dark:hover:text-secondary">
                    {darkMode ? (<span>Light Mode</span>) : (<span>Dark Mode</span>)}
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm hover:text-secondary dark:hover:text-secondary">
                    Account settings
                  </a>
                </li>
              </ul>
              <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    onClick={() => signOut()}
                    className="block py-2 px-4 text-sm hover:text-secondary dark:hover:text-secondary"
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
    </>
  );
};

export default Navbar;