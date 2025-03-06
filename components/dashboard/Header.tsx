"use client";
import { signOutAction } from "@/app/actions";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardHeader() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <header className="w-screen px-4 py-4 lg:py-4 lg:px-8 border-b dark:border-zinc-800 border-zinc-100 flex justify-between items-center bg-white dark:bg-black">
                <div className="flex gap-4 items-center">
                    <button className="h-10 w-10 grid place-content-center bg-light dark:bg-black border border-zinc-200 dark:border-zinc-600 text-black dark:text-white rounded-xl font-bold relative overflow-hidden" onClick={() => setToggle(!toggle)}>
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(200px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        <Menu size={20} />
                    </button>
                    <div className="text-lg font-bold">
                        Dashboard
                    </div>
                </div>
                <div className="flex gap-2 text-xl items-center">
                    <ModeToggle />
                    <form action={signOutAction}>
                        <button type="submit" className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl font-bold relative overflow-hidden">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                                }}
                            />
                            Sign Out
                            {/* <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,157,255,0.5),rgba(255,255,255,0))] z-20"></div> */}
                        </button>
                    </form>
                </div>
            </header>

            <AnimatePresence>
                {toggle && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35, ease: "easeInOut" }} className="w-screen h-screen fixed top-0 left-0 z-50 bg-white/50 dark:bg-zinc-900/80 backdrop-filter backdrop-blur-sm" onClick={() => setToggle(!toggle)}>
                        <motion.div initial={{ left: "-100%" }} animate={{ left: 0 }} transition={{ duration: .5, ease: "easeInOut" }} exit={{ left: "-100%" }} className="h-screen py-4 px-4 bg-white dark:bg-black fixed top-0 z-70 border-r border-zinc-200 dark:border-zinc-800 opacity-100 min-w-40 max-w-64 w-full" onClick={(e) => e.stopPropagation()}>
                            <div className="w-full flex justify-between items-center text-xl md:text-2xl font-bold">
                                <Logo />
                                <button className="h-8 w-8 grid place-content-center bg-light dark:bg-black border border-zinc-200 dark:border-zinc-600 text-black dark:text-white rounded-xl font-bold relative overflow-hidden" onClick={() => setToggle(!toggle)}>
                                    <div
                                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                        style={{
                                            opacity: 1,
                                            background: `radial-gradient(200px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                                        }}
                                    />
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="grid gap-2 mt-8">
                                <motion.div initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: .25, delay: .5 }} className="text-lg font-bold">
                                    <Link href={"/"}>
                                        Home
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: .25, delay: .7 }} className="text-lg font-bold">
                                    <Link href={"/"}>
                                        Dashboard
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: .25, delay: .9 }} className="text-lg font-bold">
                                    <Link href={"https://ascendence.streamlit.app/"} target="_blank">
                                        Ascendence Advisory
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: .25, delay: .9 }} className="text-lg font-bold">
                                    <Link href={"/"}>
                                        Profile
                                    </Link>
                                </motion.div>
                                <motion.div initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: .25, delay: 1.1 }} className="text-lg font-bold">
                                    <form action={signOutAction} className="w-full grid mt-2 py-4 border-t border-zinc-200 dark:border-zinc-800">
                                        <button type="submit" className="bg-black border border-zinc-600 text-white px-4 text-nowrap py-1 rounded-xl text-sm sm:text-base font-bold relative overflow-hidden">
                                            <div
                                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                                style={{
                                                    opacity: 1,
                                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                                                }}
                                            />
                                            Sign Out
                                            {/* <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,157,255,0.5),rgba(255,255,255,0))] z-20"></div> */}
                                        </button>
                                    </form>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}