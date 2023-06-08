import text from "../../assets/text.png";

const Herocards = () => {
  return (
    <div className="h-48 w-44 bg-gradient-to-r from-white/70 shadow-md to-white rounded-3xl relative hover:scale-110 transition-transform duration-300 ease-in-out ">
      <div className="h-full w-full flex justify-center items-center ">
        <div className="absolute top-0 self-end -translate-y-1/2  ">
          <img src={text} alt="text" className="h-full w-48" />
        </div>
        <div className="max-w-[90%]">
          <h1 className="text-2xl mt-10 text-center text-black font-semibold">
            Pizza
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Chicken Mushroom Pizza
          </p>
          <h1 className="text-md text-center text-accent-2 font-semibold">
            $ 12.99
          </h1>

          <div className="w-full flex items-center justify-center">
            <button className="absolute bottom-0 translate-y-1/2 bg-gradient-to-r from-amber-400 to-accent-4 rounded-full w-10 h-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocards;
