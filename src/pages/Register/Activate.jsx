import React, { useEffect, useRef } from 'react';
import * as Icon from '../../assets';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../api/axios";

const ActivationPage = () => {

  const shouldLoad = useRef(true);
  const queryParams = new URLSearchParams(window.location.search);
  const activationCode = queryParams.get("code");
  const navigate = useNavigate();

  const reissueActivationCode = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem('tempEmail');

    await axios
      .get(`/user/reissue-activation-code/${email}`)
      .then((result) => {
        console.log(result);
        toast("New activation link has been sent to your email inbox.");
        localStorage.removeItem('tempEmail');
      })
      .catch((error) => {})
  }

  const redirect = async (path) => {
    await setTimeout(() => {
      navigate(path, { replace: true });
    }, 3000);
  }

  useEffect(() => {
    if (shouldLoad.current) {
      shouldLoad.current = false;

      if (activationCode) {
        console.log(activationCode);
        axios
          .get(`/user/activate/${activationCode}`, {
            headers: { 'Content-Type': 'application/json' }
          })
          .then((res) => {
            toast("Your account is activated successfully!");
            redirect("/login");
          })
          .catch((error) => {
            console.log(error)
            toast.error("The activation link is invalid or expired.");
          })
        return;
      }
    }
  }, [activationCode]);

  return (
    <>
      <Toaster />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex logo items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src={Icon.logo} alt="griggin-logo" />
                GRIFFIN    
            </a>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h1 className="mb-1 text-lg text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Your account has not been activated yet.
                </h1>
                <p className="font-light text-gray-500 dark:text-gray-400">Head over to your email inbox and click the activation link to verify your account registration.</p>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                  <button
                    type="submit"
                    onClick={reissueActivationCode}
                    className="
                      w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none 
                      focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                      dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                    "
                  >
                    Resend confirmation link
                  </button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
};

export default ActivationPage;