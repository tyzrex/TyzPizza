import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { ILogin } from "./types";
import React, { useCallback, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { ErrorToast, SuccessToast } from "../../toast/toast";
import { firebaseAuth, loginUser, provider } from "../../../api";
import { dataValidation } from "../../../validation/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from "../../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState<ILogin>({
    email: "",
    password: "",
  });

  const validateData = useCallback(
    (name: string, value: string) => {
      return dataValidation({
        ...loginData,
        [name]: value,
      });
    },
    [loginData]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setLoginError((prevErrors) => ({
        ...prevErrors,
        [name]: validateData(name, value)[name],
      }));
    },
    [validateData]
  );

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        if (result) {
          firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
              user.getIdToken().then((idToken) => {
                loginUser(idToken).then((res) => {
                  console.log(res);
                  if (res.status === 200) {
                    SuccessToast("Login Successfull");
                    navigate("/");
                    useAuthStore.setState({ user: res.data.user });
                  }
                });
              });
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = loginData;
    const { email: emailError, password: passwordError } = validateData(
      "email",
      email
    );
    setLoginError({ email: emailError, password: passwordError });
    if (!emailError && !passwordError) {
      await signInWithEmailAndPassword(
        firebaseAuth,
        loginData.email,
        loginData.password
      )
        .then((result) => {
          if (result) {
            firebaseAuth.onAuthStateChanged((user) => {
              if (user) {
                user.getIdToken().then((idToken) => {
                  loginUser(idToken).then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                      SuccessToast("Login Successfull");
                      useAuthStore.setState({ user: res.data.user });
                      navigate("/");
                    }
                  });
                });
              }
            });
          }
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            ErrorToast("Wrong Password");
          } else if (error.code === "auth/user-not-found") {
            ErrorToast("User not found");
          } else {
            ErrorToast("Something went wrong");
          }
        });
    } else {
      ErrorToast("Fill the details correctly");
    }
  };

  return (
    <div className="w-screen h-screen login-page bg-cover bg-no-repeat bg-center">
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
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={loginWithEmail}>
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
                      value={loginData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      placeholder="Enter your email address"
                      className="block w-full rounded-md border border-gray-200 py-2 text-gray-900 dark:bg-bg-dark-main/40 dark:border-gray-700 dark:text-gray-300 shadow-sm  placeholder:text-gray-400sm:text-sm sm:leading-6 px-4 pl-9"
                    />
                  </div>
                  {loginError.email && (
                    <h1 className="text-red-500">{loginError.email}</h1>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-accent-1 hover:text-teal-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center relative">
                    <LockClosedIcon className="h-5 w-5 ml-3 text-gray-400 absolute" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={loginData.password}
                      autoComplete="current-password"
                      required
                      placeholder="Password"
                      className="block w-full rounded-md border border-gray-200 py-2 text-gray-900 dark:bg-bg-dark-main/40 dark:border-gray-700 dark:text-gray-300 shadow-sm placeholder:text-gray-400 pl-9 sm:text-sm sm:leading-6 px-4 "
                    />
                  </div>
                  {loginError.password && (
                    <p className="text-red-500">{loginError.password}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-accent-2 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-3 transition-colors duration-500"
                  >
                    Sign in
                  </button>
                </div>

                <div className="">
                  <button
                    type="button"
                    onClick={loginWithGoogle}
                    className="text-white w-full  bg-blue-500 hover:bg-blue-500/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between  mr-2 mb-2"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign In with Google<div></div>
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <Link
                  to="/register"
                  className="font-semibold leading-6 text-accent-1 hover:text-teal-500"
                >
                  Register Today!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
