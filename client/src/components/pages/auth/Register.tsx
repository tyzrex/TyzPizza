import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen register-page bg-cover bg-no-repeat bg-center flex justify-end items-center">
      <div className="md:w-[40%] bg-white dark:bg-bg-dark-main/100 h-full backdrop-blur-md">
        <div className="h-full">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-full w-auto"
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-3xl py-4 font-bold leading-9 tracking-tight text-accent-2 dark:text-gray-300">
                Register for an account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="mt-2 flex items-center relative">
                    <EnvelopeIcon className="h-5 w-5 ml-3 text-gray-400 absolute" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      // onChange={handleChange}
                      autoComplete="email"
                      required
                      placeholder="Enter your email address"
                      className="block w-full rounded-lg border pl-9 border-gray-200 py-3 text-gray-900 dark:bg-bg-dark-main/40 dark:border-gray-700 dark:text-gray-300 shadow-sm  placeholder:text-gray-400sm:text-sm sm:leading-6 px-4"
                    />
                    {/* {registerError.email && (
                      <p className="text-red-500">{registerError.email}</p>
                    )} */}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <div className="mt-2 flex items-center relative">
                    <UserIcon className="h-5 w-5 ml-3 text-gray-400 absolute" />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      // onChange={handleChange}
                      autoComplete="username"
                      required
                      placeholder="Enter your username"
                      className="block w-full pl-9 rounded-lg border border-gray-200 py-3 text-gray-900 dark:bg-bg-dark-main/40 dark:border-gray-700 dark:text-gray-300 shadow-sm  placeholder:text-gray-400sm:text-sm sm:leading-6 px-4"
                    />
                    {/* {registerError.username && (
                      <p className="text-red-500">{registerError.username}</p>
                    )} */}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative flex items-center">
                    <LockClosedIcon className="h-5 w-5 text-gray-400 ml-3 absolute" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      // onChange={handleChange}
                      autoComplete="current-password"
                      required
                      placeholder="Enter your password"
                      className="block w-full pl-9 rounded-lg border border-gray-200 py-3 text-gray-900 dark:bg-bg-dark-main/40 dark:border-gray-700 dark:text-gray-300 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 px-4 "
                    />
                    {/* {registerError.password && (
                      <p className="text-red-500">{registerError.password}</p>
                    )} */}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-lg bg-accent-2 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-3 transition-colors duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-accent-1 hover:text-teal-500"
                >
                  Sign In!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
