import herobg from "../../assets/heroBg.png";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import Herocards from "../cards/Herocards";

const Hero = () => {
  return (
    <AnimatePresence>
      <div className="w-screen py-20 h-auto relative flex justify-center items-center dark:bg-bg-dark-main bg-cover bg-center">
        {/* <div className="absolute w-screen h-full bg-black opacity-50 dark:bg-bg-dark-main dark:opacity-70"></div> */}
        <div className="max-w-[90%] xl:max-w-[1200px] flex items-center z-10 flex-col lg:flex-row justify-between gap-20 lg-gap-0">
          <div className="w-full lg:max-w-[55%]">
            <motion.h1
              variants={textVariant(0.2)}
              initial="hidden"
              animate="show"
              className="text-6xl text-center lg:text-left leading-[1.1] font-bold text-black dark:text-amber-400"
            >
              Slice through the Ordinary, Heroic{" "}
              <span className="bg-gradient-to-r to-accent-1 from-accent-2 text-transparent bg-clip-text">
                Pizzabilities
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", "spring", 0.4, 0.8)}
              initial="hidden"
              animate="show"
              className="text-center leading-[1.5] lg:text-left text-black dark:text-gray-400 text-xl mt-10"
            >
              Taste the Triumph, Where Pizza Dreams Come True! Embark on a
              culinary journey divine Embark on a culinary journey divine
            </motion.p>

            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.8)}
              initial="hidden"
              animate="show"
              className="w-full flex justify-center lg:justify-start mt-10"
            >
              <button className="bg-accent-2 text-white dark:text-white dark:bg-amber-400 rounded-full w-40 h-12 flex justify-center items-center">
                <span className="text-lg font-semibold">Order Now</span>
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.8)}
            initial="hidden"
            animate="show"
            className="relative "
          >
            <div>
              <img src={herobg} alt="hero" className="w-full h-[500px]" />
            </div>
            <div className="absolute top-10 right-5 lg:top-16 w-full lg:right-24 grid grid-cols-2 gap-20">
              <Herocards />
              <Herocards />
              <Herocards />
              <Herocards />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
