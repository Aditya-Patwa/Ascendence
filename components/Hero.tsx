import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <main>
            <div className="w-screen grid py-12 md:py-8 px-4 lg:px-8">
                <div className="max-w-7xl">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight font-extrabold">
                        Empowering you to <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-pink-500 font-black">ascend</span> beyond financial limits.
                    </h1>
                </div>
                <div className="max-w-xl md:max-w-3xl lg:max-w-5xl my-4">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-light text-zinc-700 dark:text-zinc-400">
                        Take control of your finances, achieve your goals, and experience limitless growth with ease.
                    </h3>
                </div>

                <div className="py-2 lg:mt-4">
                    <div className="flex">
                        <Link href={"/"} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-black px-6 lg:px-8 py-2 bg-black dark:bg-white flex gap-2 items-center group">
                            Get Started
                        </Link>
                        <Link href={"/"} className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 py-2 flex gap-1 items-center group text-indigo-600">
                            Learn More<span className="group-hover:translate-x-2 transition-ease duration-200"><ArrowRight strokeWidth="3" className="size-[16px] lg:size-[32px]" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}