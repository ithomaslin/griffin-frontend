import React, { useEffect, useState, useRef, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Notification, Sidebar } from '../Authenticated';
import { useAuthUser } from 'react-auth-kit';
import { initFlowbite } from 'flowbite';
import toast from 'react-hot-toast';
import axios from '../../api/axios';
import ThemeContext from '../../context/ThemeContext';
import PageContext from '../../context/LocationContext';

const AuthenticatedLayout = () => {
  
  const shouldLoad = useRef(true);
  const auth = useAuthUser();
  const oauthToken = auth().token;
  const [user, setUser] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;

      toast.promise(
        axios
          .get('/user/oauth/me', {
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
        <PageContext.Provider value={{ page, setPage }}>
          <div className="antialiased">

            <Sidebar />
            <Navbar user={user} />

            <main className="h-auto pt-0 mt-0">
              <div className={`
                h-screen overflow-hidden ml-0 lg:ml-64 justify-center
                ${ darkMode ? "bg-gray-900" : "bg-accent" }
              `}>
                <Outlet />
              </div>
            </main>
          </div>
        </PageContext.Provider>
      </ThemeContext.Provider>
    </>
  );

}

export default AuthenticatedLayout;