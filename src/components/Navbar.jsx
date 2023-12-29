import React, { useState } from "react";
import MenuItem from "./MenuItem";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";

import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex items-center justify-between p-5">
      <div className="flex items-center space-x-10">
        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[35px] md:w-[140px] md:h-[50px] bg-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <MenuItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex items-center md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <MenuItem key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={handleToggle}>
            <MenuItem name={""} Icon={BsThreeDotsVertical} />
            {toggle && (
              <div className="absolute bg-[#1212] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <MenuItem key={index} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="avatar"
        className="md:w-[40px] w-[30px]"
      />
    </nav>
  );
};

export default Navbar;
