"use client";
import Link from "next/link";
import { urbanist } from "@/components/fonts";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <header className={`w-screen px-6 py-6 lg:py-8 lg:px-8 flex justify-between items-center bg-white dark:bg-black gap-8`}>
                <div>
                    <Link href={"/"} className={`${urbanist.className} text-black dark:text-white font-bold bg-clip-text items-center flex gap-0`}>
                        <Logo />
                        {/* <Image src={"/ascendence-logo.svg"} alt="logo" width={64} height={64} /> */}
                        {/* ascendence  */}
                    </Link>
                </div>

                {/* <div className="hidden md:flex lg:hidden justify-between items-center gap-4">
                <Link href={"/"} className="text-zinc-300 text-base bg-black hover:text-white">
                    Our Services
                </Link>
                <Link href={"/"} className="text-zinc-300 text-base bg-black hover:text-white">
                    About
                </Link>
                <Link href={"/"} className="text-zinc-300 text-base bg-black hover:text-white">
                    Pricing
                </Link>
                <Link href={"/"} className="text-zinc-300 text-base bg-black hover:text-white">
                    FAQs
                </Link>
                <Link href={"/"} className="text-zinc-300 text-base bg-black hover:text-white">
                    Feedback
                </Link>

                <Link href={"/"} className="bg-black border border-zinc-600 text-white px-4 py-2 rounded-xl text-sm font-bold relative overflow-hidden">
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                        style={{
                            opacity: 1,
                            background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                        }}
                    />
                    Get Started
                </Link>
            </div> */}

                <div className="hidden md:flex justify-around items-center gap-3 lg:gap-6">
                    {/* <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    Home
                </Link> */}
                    <Link href={"/"} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 text-lg lg:text-2xl dark:hover:text-white">
                        Products
                    </Link>
                    <Link href={"/"} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 text-lg lg:text-2xl dark:hover:text-white">
                        About
                    </Link>
                    <Link href={"/"} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 text-lg lg:text-2xl dark:hover:text-white">
                        Pricing
                    </Link>
                    <Link href={"/"} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 text-lg lg:text-2xl dark:hover:text-white">
                        FAQs
                    </Link>
                    <Link href={"/"} className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 text-lg lg:text-2xl dark:hover:text-white">
                        Feedback
                    </Link>
                </div>

                <div className="hidden md:flex gap-1 items-center">
                    <Link href={"/"} className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-base lg:text-xl font-bold relative overflow-hidden">
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        Get Started

                        {/* <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,157,255,0.5),rgba(255,255,255,0))] z-20"></div> */}
                    </Link>
                    <ModeToggle />
                </div>

                <div className="flex md:hidden gap-2 items-center">
                    <ModeToggle />
                    <button className="h-10 w-10 grid place-content-center bg-light dark:bg-black border border-zinc-200 dark:border-zinc-600 text-black dark:text-white rounded-xl font-bold relative overflow-hidden" onClick={() => setToggle(!toggle)}>
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(200px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </header>

            {toggle && (
                <nav className="px-4 absolute w-screen z-20">
                    <div className="py-2 pt-4 bg-white/90 dark:bg-black/80 rounded-xl border border-zinc-300 dark:border-zinc-800 grid gap-2 backdrop-blur-lg">
                        <div className="text-center">
                            <Link href={"/"} className="font-bold text-lg">
                                Products
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href={"/"} className="font-bold text-lg">
                                About
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href={"/"} className="font-bold text-lg">
                                Pricing
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href={"/"} className="font-bold text-lg">
                                FAQs
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link href={"/"} className="font-bold text-lg">
                                Feedback
                            </Link>
                        </div>
                        <div className="text-center mt-2 flex px-2">
                            <Link href={"/"} className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-lg text-base lg:text-xl font-bold relative overflow-hidden w-full backdrop-blur">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </nav>
            )}

        </>
    )
}