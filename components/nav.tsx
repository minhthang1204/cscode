import { NextPage } from "next";
import React from "react";

const Nav: NextPage = () => {
  return (
    <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative mx-auto max-w-screen-xl items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <button
              id="navbarToggler"
              className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
            </button>
            <nav
              id="navbarCollapse"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
            >
              <ul className="blcok lg:flex  justify-center">
                <li className="group relative">
                  <a
                    href="#home"
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#about"
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                  >
                    About
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#faq"
                    className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
