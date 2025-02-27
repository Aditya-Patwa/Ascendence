"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ProfileNew() {
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(true);

    return (
        <div className="p-4 grid">
            <div className="justify-self-center max-w-5xl p-4 w-full">
                <div className="text-3xl font-black mb-4">
                    Create Profile
                </div>
                <div className="grid gap-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold">
                            0%
                        </h1>
                        <h1 className="font-bold">
                            100%
                        </h1>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-900 rounded-full">
                        <motion.div initial={{ width: "0%" }} animate={{ width: `${counter * 20}%` }} className="bg-emerald-500 py-1 rounded-full">
                        </motion.div>
                    </div>
                </div>


                <div className="py-8">
                    <AnimatePresence mode="wait">
                        <motion.div initial={direction ? ({y: 20, opacity: 0}) : ({y: -20, opacity: 0})} animate={{y: 0, opacity: 1}} exit={direction ? ({y: -20, opacity: 0}) : ({y: 20, opacity: 0})} transition={{duration: .35, ease: "easeInOut"}} key={counter} className="grid gap-2">
                            <h1 className="text-2xl font-bold">
                                Profile Details
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>


                <div className="mt-4 flex justify-end gap-2">
                    {counter > 0 && (
                        <button onClick={() => { setDirection(false); setCounter((c) => c - 1) }} className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.1), transparent 40%)`,
                                }}
                            />
                            <div>Previous</div>
                        </button>
                    )}
                    {counter < 5 && (
                        <button onClick={() => { setDirection(true); setCounter((c) => c + 1) }} className="bg-black dark:bg-white border border-zinc-500 dark:border-zinc-600 text-white dark:text-black px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.1), transparent 40%)`,
                                }}
                            />
                            <div>Next</div>
                        </button>
                    )}
                     {counter == 5 && (
                        <button className="bg-black dark:bg-white border border-zinc-500 dark:border-zinc-600 text-white dark:text-black px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.1), transparent 40%)`,
                                }}
                            />
                            <div>Submit</div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}