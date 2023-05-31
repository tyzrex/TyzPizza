import Approutes from "./routes/Routes";
import { ShowNavbar } from "./components/utils/ShowNavbar/ShowNavbar";
import Navbar from "./components/main-components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/store";
import axiosInstance from "./api/axiosInstance";
import { useEffect, useState } from "react";
import Loader from "./loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const loadingVarient: any = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pageVarient: any = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      {loading ? (
        <AnimatePresence>
          <motion.div
            variants={loadingVarient}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Loader />
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          variants={pageVarient}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Toaster />
          <ShowNavbar>
            <Navbar />
          </ShowNavbar>
          <Approutes />
        </motion.div>
      )}
    </div>
  );
}

export default App;
