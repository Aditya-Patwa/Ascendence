import Link from "next/link";
import { urbanist } from "@/app/layout";
import { useState } from "react";

export default function Header() {
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
        </header>
    )
}