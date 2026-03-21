"use client";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Character from "../public/images/character.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { DraggableCard } from "@/components/DraggableCard";
import { Navbar } from "@/components/Navbar";
import { div } from "framer-motion/client";

const animationPreset = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9, y: 1 },
  transition: {
    duration: 0.8,
    ease: "easeInOut",
    type: "spring",
    stiffness: 300,
    damping: 15,
  } as const,
};

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col text-red-50">
        <section className="flex justify-between w-full min-h-screen bg-black snap-start">
          <div className="flex flex-1 justify-evenly items-center">
            <div className="flex items-baseline">
              <Image src={logo} width={500} height={10} alt="heigne" />
            </div>

            <div className="cursor-default">
              <p className="font-extrabold text-2xl text-gray-400">
                Hi! I'm <span>Sangam</span>
              </p>
              <div className="flex gap-3 text-gray-300">
                <p className="hover:text-red-500 transition-colors duration-300">
                  Designer
                </p>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Developer
                </p>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Artist
                </p>
              </div>
              <p className="flex text-9xl ">KIRYUUXU</p>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen bg-black px-[120px] pt-[120px] flex-1 justify-center items-center text-center snap-start">
          <p className="text-8xl text-gray-300 pb-5">WORK</p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 3,
              },
            }}
            className="flex justify-center items-center"
          >
            <motion.div
              {...animationPreset}
              className="z-10 -rotate-12 h-[600px] w-[400px] opacity-60 bg-amber-300 hover:opacity-100 transition-opacity ease-in-out"
            >
              <h1 className="text-3xl">Design</h1>
            </motion.div>
            <motion.div
              {...animationPreset}
              className="h-[600px] w-[400px] bg-amber-600  opacity-60 hover:opacity-100 transition-opacity ease-in-out "
            >
              <h1>Web Development</h1>
            </motion.div>
            <motion.div
              {...animationPreset}
              className="z-10 rotate-12 h-[600px] w-[400px] opacity-60 bg-fuchsia-300 hover:opacity-100 transition-opacity ease-in-out"
            >
              3D Project
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full min-h-screen bg-black px-[120px] pt-[120px] flex-1 justify-center items-center text-center snap-start">
          <p className="text-8xl text-gray-300 pb-5">WORK</p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 3,
              },
            }}
            className="flex justify-center items-center"
          >
            <motion.div
              {...animationPreset}
              className="z-10 -rotate-12 h-[600px] w-[400px] opacity-60 bg-amber-300 hover:opacity-100 transition-opacity ease-in-out"
            >
              <h1 className="text-3xl">Design</h1>
            </motion.div>
            <motion.div
              {...animationPreset}
              className="h-[600px] w-[400px] bg-amber-600  opacity-60 hover:opacity-100 transition-opacity ease-in-out "
            >
              <h1>Web Development</h1>
            </motion.div>
            <motion.div
              {...animationPreset}
              className="z-10 rotate-12 h-[600px] w-[400px] opacity-60 shadow-amber-200 bg-fuchsia-300 hover:opacity-100 transition-opacity ease-in-out"
            >
              3D Project
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
