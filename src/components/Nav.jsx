import React, {useState} from "react";
import mastercard from "../assets/img/mastercard.svg";
import { CgClose, CgChevronDown, CgMenuRightAlt } from "react-icons/cg";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="pad bg-primary text-white py-6 flex items-center justify-between sticky top-0">
      {/* LOGO */}
      <span className="flex items-center gap-2 tracking-widest z-10">
        <img className="w-10" src={mastercard} alt="logo" />
        <h1 className={`${mobileNav ? 'text-primary' : 'text-white'} bold`}>Fintekh</h1>
      </span>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex">
        <ul className="flex gap-12 text-lg uppercase">
          <a href="#">
            <li className="flex gap-5 items-center">
              product <CgChevronDown />
            </li>
          </a>
          <a href="#">
            <li>about</li>
          </a>
          <a href="#">
            <li>blog</li>
          </a>
          <a href="#">
            <li>faq</li>
          </a>
        </ul>
      </div>

      {/* MOBILE NAV ICONS */}
      <span onClick={()=> setMobileNav(!mobileNav)} className={`${mobileNav ? 'text-primary':'text-white'} lg:hidden z-10`}>
        {mobileNav ? <CgClose /> : <CgMenuRightAlt />}
      </span>

      {/* MOBILE NAV MENU */}
      <div className= {`${mobileNav ? 'left-0':'-left-full'} bg-white uppercase text-primary lg:hidden absolute w-full flex justify-center h-screen items-center top-0 transition-all`}>
        <ul className="flex gap-7 flex-col">
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">faq</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
