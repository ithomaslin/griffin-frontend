import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAuthButton from './GoogleAuth';
import axios from "../../api/axios";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const sumbitSignup = async(e) => {
    e.preventDefault();

    if (confirmPassword != password) {
      toast.error("Password mismatched.");
      return;
    } else if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }

    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    formData.append('register_via', "web");

    await axios.post('/register', formData, {
      headers: { "Content-Type": "miltipart/form-data" }
    })
    .then((result) => {
      navigate('/activation', { replace: true });
    })
    .catch((error) => {
      toast.error(error.response?.data?.detail);
    })
  };

  return (
    <>
      <Toaster />
      
      <main className="w-full max-w-md mx-auto p-6 py-16">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a className="text-primary decoration-2 hover:underline font-medium" href="/login">
                  &nbsp;Sign in here
                </a>
              </p>
            </div>

            <div className="mt-5">
              <GoogleAuthButton title={"Sign up with Google"} />
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

              {/* <!-- Form --> */}
              <form>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="
                          py-3 px-4 block w-full border-gray-200 rounded-md text-sm 
                          focus:border-primary focus:ring-primary dark:bg-gray-800 
                          dark:border-gray-700 dark:text-gray-400
                        " 
                        required aria-describedby="email-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        id="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="
                          py-3 px-4 block w-full border-gray-200 rounded-md text-sm 
                          focus:border-primary focus:ring-primary dark:bg-gray-800 
                          dark:border-gray-700 dark:text-gray-400
                        " 
                        required aria-describedby="password-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="
                          py-3 px-4 block w-full border-gray-200 rounded-md text-sm 
                          focus:border-primary focus:ring-primary dark:bg-gray-800 
                          dark:border-gray-700 dark:text-gray-400
                        " 
                        required aria-describedby="confirm-password-error" />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-primary decoration-2 hover:underline font-medium" href="#">Terms and Conditions</a></label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}

                  <button
                    type="submit"
                    onClick={sumbitSignup}
                    className="
                      py-3 px-4 inline-flex justify-center items-center gap-2 
                      rounded-md border border-transparent font-semibold bg-primary 
                      text-white hover:bg-primary focus:outline-none focus:ring-2 
                      focus:ring-primary focus:ring-offset-2 transition-all text-sm 
                      dark:focus:ring-offset-gray-800
                    "
                  >
                    Sign up
                  </button>
                </div>
              </form>
              {/* <!-- End Form --> */}

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;