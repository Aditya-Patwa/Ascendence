"use client";
import Link from "next/link";
import { urbanist } from "@/components/fonts";
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={`w-screen px-6 py-6 flex justify-between items-center bg-black`}>
            <div>
                <Link href={"/"} className={`${urbanist.className} text-white text-3xl font-bold bg-clip-text flex gap-1`}>
                    ascendence  <span className="w-4 h-4 self-end rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600"></span>
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

            <div className="hidden md:flex justify-between items-center gap-4 lg:gap-6">
                {/* <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    Home
                </Link> */}
                <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    Products
                </Link>
                <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    About
                </Link>
                <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    Pricing
                </Link>
                <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    FAQs
                </Link>
                <Link href={"/"} className="text-zinc-300 text-lg bg-black hover:text-white">
                    Feedback
                </Link>
            </div>

            <div className="hidden md:flex gap-2">
                <Link href={"/"} className="bg-black border border-zinc-600 text-white px-4 py-2 rounded-xl font-bold relative overflow-hidden">
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                        style={{
                            opacity: 1,
                            background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                        }}
                    />
                    Get Started
                </Link>
            </div>

            <div className="flex md:hidden">
                <button className="h-10 w-10 grid place-content-center bg-black border border-zinc-600 text-white rounded-xl font-bold relative overflow-hidden">
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                        style={{
                            opacity: 1,
                            background: `radial-gradient(200px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                        }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
            </div>
        </header>
    )
}