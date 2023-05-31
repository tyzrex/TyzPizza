import axiosInstance from "./axiosInstance";
import { getAuth
, GoogleAuthProvider } from "firebase/auth";
import app from "../config/firebaseConnect"
import { SuccessToast } from "../components/toast/toast";
import useAuthStore from "../store/store";

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

export async function logOutUser () {
 try{
    firebaseAuth.signOut();
    const response = await axiosInstance.get("/auth/logout");
    if(response){
      useAuthStore.setState({user: null});
    }
    if(response.status === 200){
      SuccessToast("Logged out successfully");
    }
 }
  catch(err){
    console.log(err);
  }
}