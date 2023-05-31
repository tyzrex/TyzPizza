import { useState } from "react";
import useAuthStore from "../../store/store";
import { BackspaceIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {user?.picture ? (
          <img
            src={user?.picture}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-600 dark:text-gray-400 text-sm font-bold">
              {user?.name ? user.name.split(" ")[0] : user?.email.split("@")[0]}
            </span>
          </div>
        )}
      </div>
      {show && (
        <ul className="visible transition duration-300 opacity-100 bg-gray-200 dark:bg-bg-dark-main shadow rounded mt-2 pb-1 w-52 absolute right-0">
          <li className="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-accent-2 text-white px-3">
            <span className="font-medium">
              {user?.name ? user.name.split(" ")[0] : user?.email.split("@")[0]}
            </span>
            <span className="font-normal mt-2">{user?.email}</span>
          </li>
          <li className="cursor-pointer flex items-center text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
            <ShoppingBagIcon className="h-5 w-5 mr-2" />
            My Orders
          </li>
          <li>
            <hr className="border-gray-300 dark:border-gray-700 my-1" />
          </li>
          <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
            Settings
          </li>
          <li className="cursor-pointer flex items-center text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
            <BackspaceIcon className="h-5 w-5 mr-2" />
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};
export default DropDown;
