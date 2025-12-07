"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  return (
    <div>
      <div className="h-16 md:px-16 px-4 shadow-md bg-slate-50 w-full fixed z-50 flex items-center font-montserrat">
        <div className="max-w-6xl w-full flex mx-auto justify-between items-center">
          <h1 className="font-semibold text-xl">TANATORN</h1>
          <ul className="gap-4 lg:gap-8 font-medium hidden md:flex">
            <li>
              <Link href="#home-section" className="hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#project-section" className="hover:underline">
                Project
              </Link>
            </li>
            <li>
              <Link href="#skill-section" className="hover:underline">
                Skill
              </Link>
            </li>
            {/* <li>
              <Link href="#contact-section" className="hover:underline">
                Contact
              </Link>
            </li> */}
          </ul>
          <div
            className=" md:hidden"
            onClick={() => setIsOpenNavbar(!isOpenNavbar)}
          >
            {isOpenNavbar ? (
              <FaXmark className="size-6" />
            ) : (
              <HiBars3 className="size-6 md:hidden" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`z-40 fixed w-full bg-slate-50 shadow-sm translate-y-16 transition-all duration-300 font-montserrat ${
          isOpenNavbar ? "top-0" : "-top-64"
        }`}
      >
        <div className="gap-8 py-6 font-medium flex flex-col justify-center text-center w-full z-50">
          <Link
            href="#home-section"
            className="hover:underline"
            onClick={() => setIsOpenNavbar(false)}
          >
            About Me
          </Link>
          <Link
            href="#project-section"
            className="hover:underline"
            onClick={() => setIsOpenNavbar(false)}
          >
            Project
          </Link>
          <Link
            href="#skill-section"
            className="hover:underline"
            onClick={() => setIsOpenNavbar(false)}
          >
            Skill
          </Link>
          <Link
            href="#contact-section"
            className="hover:underline"
            onClick={() => setIsOpenNavbar(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
