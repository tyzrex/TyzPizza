import Approutes from "./routes/Routes";
import { ShowNavbar } from "./components/utils/ShowNavbar/ShowNavbar";
import Navbar from "./components/main-components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/store";
import axiosInstance from "./api/axiosInstance";
import { useEffect } from "react";

function App() {
  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/auth/getuser");
      useAuthStore.setState({ user: res.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Toaster />
      <ShowNavbar>
        <Navbar />
      </ShowNavbar>
      <Approutes />
    </div>
  );
}

export default App;
