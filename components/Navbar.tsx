"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import instagram from "@/public/images/instagram.png";
import linkedin from "@/public/images/linkedin.png";
import github from "@/public/images/github.png";
import logo from "@/public/images/logo.png";
const MotionImage = motion(Image);

// const [active, setActive] = useState("home");
export const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50  flex  text-center space-x-1 justify-between items-center px-[120px]  backdrop-blur-md">
      <div className="w-[150px]">
        <Link href="/">
          {/* <MotionImage
            src={logo}
            width={60}
            height={10}
            alt="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          /> */}
          <Image src={logo} width={60} height={10} alt="logo" />
        </Link>
      </div>
      <div className="w-auto  flex justify-evenly border-4 rounded-full border-amber-50 hover:scale-105 transition duration-150 ease-in">
        <Link
          href={"/"}
          onClick={() => {}}
          className="w-[60px]  text-red-700 font-bold hover:bg-amber-950"
        >
          HOME
        </Link>
        <Link
          href={"/work"}
          className="w-[60px] active:text-red-700 hover:bg-amber-950"
        >
          WORK
        </Link>
        <Link href={"/about"} className="w-[60px] hover:bg-amber-950 ">
          ABOUT
        </Link>
      </div>
      <div className="flex w-[150px] justify-end gap-x-5 hover:scale-105 transition duration-150 ease-in">
        <a href="https://www.instagram.com/kiryuuxu/">
          <Image
            src={instagram}
            width={32}
            alt="instagram"
            className="hover:scale-105 transition duration-150 ease-in"
          />
        </a>
        <a href="">
          <Image
            src={linkedin}
            width={32}
            alt="linkedin"
            className="hover:scale-105 transition duration-150 ease-in"
          />
        </a>
        <a href="https://github.com/sangamsunar/">
          <Image
            src={github}
            width={32}
            alt="github"
            className="hover:scale-105 transition duration-150 ease-in"
          />
        </a>
      </div>
    </nav>
  );
};
