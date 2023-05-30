import axiosInstance from "./axiosInstance";
import { getAuth
, GoogleAuthProvider } from "firebase/auth";
import app from "../config/firebaseConnect"

export const firebaseAuth = getAuth(app);
export const provider = new GoogleAuthProvider();

// first validates the token then returns the user
export function loginUser (token: string) {
  return axiosInstance.get("/auth/loginUser", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}