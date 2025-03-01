"use client";
import { urbanist } from "@/components/fonts";
import { BaseCard } from "@/components/BaseCard";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

function Overview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <BaseCard>
                <motion.div initial={{y: 20, opacity: 0, filter: "blur(4px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} transition={{delay: .15, duration: .5, ease: "easeOut"}} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8">
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                                Total Expenses
                            </div>
                            <div>
                                <Link href="/" className="text-xs font-bold px-3 py-0.5 bg-black text-white dark:bg-white dark:text-black rounded-full">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-4xl font-semibold">
                                <span className="text-zinc-600 dark:text-zinc-400">$</span>
                                3,069K
                            </h1>
                            <div className="flex gap-1 items-center">
                                <div className="w-4 h-4 rounded-full grid place-content-center bg-emerald-500">
                                    <ChevronDown className="size-3 text-white font-bold rotate-180" />
                                </div>
                                <div>
                                    <h6 className="text-xs font-semibold text-emerald-500">2.3%</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xs font-extralight text-zinc-500 dark:text-zinc-400">This month (March 2025)</h5>
                        </div>
                    </div>
                </motion.div>
            </BaseCard>



            <BaseCard>
                <motion.div initial={{y: 20, opacity: 0, filter: "blur(4px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} transition={{delay: .15, duration: .5, ease: "easeOut"}} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8">
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                                Total Income
                            </div>
                            <div>
                                <Link href="/" className="text-xs font-bold px-3 py-0.5 bg-black text-white dark:bg-white dark:text-black rounded-full">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-4xl font-semibold">
                                <span className="text-zinc-600 dark:text-zinc-400">$</span>
                                69,090K
                            </h1>
                            <div className="flex gap-1 items-center">
                                <div className="w-4 h-4 rounded-full grid place-content-center bg-red-500">
                                    <ChevronDown className="size-3 text-white font-bold" />
                                </div>
                                <div>
                                    <h6 className="text-xs font-semibold text-red-500">1.3%</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xs font-extralight text-zinc-500 dark:text-zinc-400">This month (March 2025)</h5>
                        </div>
                    </div>
                </motion.div>
            </BaseCard>



            <BaseCard>
                <motion.div initial={{y: 20, opacity: 0, filter: "blur(4px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} transition={{delay: .15, duration: .5, ease: "easeOut"}} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8 bg-indigo-500 text-white">
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                                Total Profit
                            </div>
                            <div>
                                <Link href="/" className="text-xs font-bold px-3 py-0.5 bg-white text-black rounded-full">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-4xl font-semibold">
                                <span className="text-zinc-200">$</span>
                                1,033
                            </h1>
                            <div className="flex gap-1 items-center">
                                <div className="w-4 h-4 rounded-full grid place-content-center bg-emerald-300">
                                    <ChevronDown className="size-3 text-black font-bold rotate-180" />
                                </div>
                                <div>
                                    <h6 className="text-xs font-semibold text-emerald-300">6.9%</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xs font-extralight text-zinc-50">This month (March 2025)</h5>
                        </div>
                    </div>
                </motion.div>
            </BaseCard>
        </div>
    )
}



export default function DashboardHome() {
    return (
        <main className="grid my-8 mb-16">
            <div className="max-w-5xl w-full justify-self-center p-4 grid gap-8">
                <div className="grid">
                    <motion.h4 initial={{x: -10, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{ease: "easeOut", duration: .45}} className="font-extralight">
                        Welcome back, Aditya
                    </motion.h4>
                    <motion.h1 initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ease: "easeOut", duration: .45, delay: .25}} className={"text-5xl font-extralight " + urbanist.className}>
                        Dashboard Overview
                    </motion.h1>
                </div>
                <Overview />
            </div>
        </main>
    )
}