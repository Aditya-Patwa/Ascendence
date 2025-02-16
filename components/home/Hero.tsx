"use client";
import { ArrowRight } from "lucide-react";
import {motion} from "motion/react";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="w-screen overflow-x-hidden">
            <div className="w-screen grid justify-center text-left py-12 md:py-8 px-4 lg:px-8 relative">
                <div className="max-w-7xl">
                    <motion.h1 initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: .45, delay: .1}} className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-left leading-none tracking-tight font-extrabold">
                        Empowering you to <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-pink-500 font-black">ascend</span> beyond financial limits.
                    </motion.h1>
                </div>
                <div className="max-w-xl md:max-w-3xl lg:max-w-5xl my-4">
                    <motion.h3 initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: .45, delay: .45}} className="text-xl md:text-3xl lg:text-4xl font-light text-zinc-700 dark:text-zinc-400">
                        Take control of your finances, achieve your goals, and experience limitless growth with ease.
                    </motion.h3>
                </div>

                <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: .45, delay: .75}}  className="py-2 lg:mt-4">
                    <div className="flex">
                        <Link href={"/"} className="bg-black border border-zinc-600 text-white px-6 text-nowrap py-2 rounded-xl text-base md:text-lg lg:text-xl font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                                }}
                            />
                            <div>Get Started</div>
                        </Link>
                        <Link href={"/"} className="text-base md:text-lg lg:text-xl font-bold px-4 py-2 flex gap-1 items-center group text-zinc-900 dark:text-zinc-100">
                            Learn More<span className="group-hover:translate-x-2 transition-ease duration-200"><ArrowRight strokeWidth="3" className="size-[10px] lg:size-[16px]" /></span>
                        </Link>
                    </div>
                </motion.div>

                <div className="absolute -right-1/2 -bottom-1/2 -md:right-1/3 h-[500px] w-[500px] md:h-[1000px] md:w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(79,70,229,.2),rgba(255,255,255,0))] -z-10"></div>
            </div>

            <div className="grid place-content-center py-4 md:py-8 px-4 md:px-8 md:mt-4 lg:mt-8">
                <div className="max-w-6xl rounded-3xl border-4 md:border-8 border-indigo-600 shadow-3xl overflow-hidden">
                    <img src="Grow Your Money.png" />
                </div>
            </div>


        </main>
    )
}