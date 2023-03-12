import React, { useState } from "react";
import { CgClose, CgChevronDown, CgMenuRightAlt } from "react-icons/cg";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="pad bg-white text-grey-1 py-3 md:py-5 lg:py-6 z-10 flex items-center justify-between sticky top-0 text-[22px] shadow-md">
      {/* LOGO */}
      <span className="flex items-center gap-2 z-10 text-primary">
        <h1>
          <a className="bold text-2xl" href="#">
            Fintekk
          </a>
        </h1>
      </span>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex">
        <ul className="flex gap-12 text-lg capitalize text-[22px]">
          <a href="#">
            <li>home</li>
          </a>
          <a href="#">
            <li>about</li>
          </a>
          <a href="#">
            <li>FAQs</li>
          </a>
          <a href="#">
            <li>contact us</li>
          </a>
        </ul>
      </div>

      <div className="gap-4 items-center bold hidden lg:flex">
        <button className="text-primary">Login</button>
        <button className="bg-primary text-white">Sign Up for Free</button>
      </div>

      {/* MOBILE NAV ICONS */}
      <span
        onClick={() => setMobileNav(!mobileNav)}
        className="text-primary-1 lg:hidden z-10"
      >
        {mobileNav ? (
          <CgClose className="text-xl" />
        ) : (
          <CgMenuRightAlt className="text-xl" />
        )}
      </span>

      {/* MOBILE NAV MENU */}
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } bg-white capitalize text-primary lg:hidden absolute w-full flex justify-center h-screen items-center top-0 transition-all bold`}
      >
        <ul className="flex gap-7 flex-col bold">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
