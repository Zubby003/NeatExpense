import React from "react";
import { RiCurrencyLine } from "react-icons/ri";
import Avatar from "../assets/Avatar.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

const links = ["Dashboard", "Transactions", "Accounts", "Settings"];
const Navbar = () => {
  const [selectedLink, setSelectedLink] = React.useState("Dashboard");
  return (
    <div className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-500  rounded-xl">
          <RiCurrencyLine className="text-white text-3xl hover:animate-spin" />
        </div>
        <span className="text-xl font-bold text-black dark:text-white">
          NeatExpense
        </span>
      </div>

      <div className="md:flex items-center hidden gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className={`${
              index === selectedLink
                ? "bg-black dark:bg-slate-800 text-white"
                : "text-gray-700 dark:text-gray-500"
            } px-6 py-2 rounded-full cursor-pointer`}
            onClick={() => setSelectedLink(index)}
          >
            <a href="#">{link}</a>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-10 2xl:gap-20">
        <ThemeToggle />

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={Avatar}
            alt="user"
            className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
          />
          <div className="hidden md:block">
            <p className="text-lg font-medium text-black dark:text-gray-400">
              John Doe
            </p>
            <span className="text-sm text-gray-700 dark:text-gray-500">
              johndoe@gmail.com
            </span>
          </div>
          <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
