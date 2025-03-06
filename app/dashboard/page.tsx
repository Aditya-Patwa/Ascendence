"use client";
import { urbanist } from "@/components/fonts";
import { BaseCard } from "@/components/BaseCard";
import { ArrowUpRight, Car, ChevronDown, Gamepad, House, Plus, Tv } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

function Overview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <BaseCard>
                <motion.div initial={{ y: 20, opacity: 0, filter: "blur(4px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ delay: .15, duration: .5, ease: "easeOut" }} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8">
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
                <motion.div initial={{ y: 20, opacity: 0, filter: "blur(4px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ delay: .15, duration: .5, ease: "easeOut" }} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8">
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
                <motion.div initial={{ y: 20, opacity: 0, filter: "blur(4px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ delay: .15, duration: .5, ease: "easeOut" }} className="p-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl grid gap-8 bg-indigo-500 text-white">
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



function ProgressBar() {
    return (
        <main className="grid sm:grid-cols-4 gap-4 mt-8">
            <div className="grid sm:col-span-4 gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Active Savings Goals</h1>

                    <div className="flex gap-2 items-center">
                        <BaseCard>
                            <Link href={"/"} className="flex place-content-center py-2 px-3 gap-1 text-xs rounded-full border border-zinc-300 dark:border-zinc-600">
                                New
                                <span>
                                    <Plus className="w-4 h-4" />
                                </span>
                            </Link>
                        </BaseCard>
                        <BaseCard>
                            <Link href={"/"} className="grid place-content-center w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-600 bg-black dark:bg-white text-white dark:text-black">

                                <span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </BaseCard>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <BaseCard>
                        <div className="rounded-2xl p-4 border border-zinc-300 dark:border-zinc-600 grid gap-1">
                            <div>
                                <div className="w-12 h-12 rounded-full grid place-content-center">
                                    <Car className="w-8 h-8 text-emerald-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold">Dream Car</h3>
                                <div className="my-1">
                                    <h5 className="text-xs font-black">
                                        $30 of $390k
                                    </h5>
                                </div>
                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full">
                                    <div className="py-0.5 w-[40%] bg-emerald-500 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                    <BaseCard>
                        <div className="rounded-2xl p-4 border border-zinc-300 dark:border-zinc-600 grid gap-1">
                            <div>
                                <div className="w-12 h-12 rounded-full grid place-content-center">
                                    <House className="w-8 h-8 text-indigo-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold">Home Loan</h3>
                                <div className="my-1">
                                    <h5 className="text-xs font-black">
                                        $30 of $390k
                                    </h5>
                                </div>
                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full">
                                    <div className="py-0.5 w-[40%] bg-indigo-500 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                    <BaseCard>
                        <div className="rounded-2xl p-4 border border-zinc-300 dark:border-zinc-600 grid gap-1">
                            <div>
                                <div className="w-12 h-12 rounded-full grid place-content-center">
                                    <Tv className="w-8 h-8 text-yellow-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold">TV</h3>
                                <div className="my-1">
                                    <h5 className="text-xs font-black">
                                        $30 of $390k
                                    </h5>
                                </div>
                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full">
                                    <div className="py-0.5 w-[40%] bg-yellow-500 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                    <BaseCard>
                        <div className="rounded-2xl p-4 border border-zinc-300 dark:border-zinc-600 grid gap-1">
                            <div>
                                <div className="w-12 h-12 rounded-full grid place-content-center">
                                    <Gamepad className="w-8 h-8 text-fuchsia-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-bold">Video Game</h3>
                                <div className="my-1">
                                    <h5 className="text-xs font-black">
                                        $30 of $390k
                                    </h5>
                                </div>
                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full">
                                    <div className="py-0.5 w-[40%] bg-fuchsia-500 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BaseCard>
                </div>
            </div>

            {/* <BaseCard> */}
            {/* <div className="p-4 rounded-2xl  border-zinc-300 dark:border-zinc-600 h-full grid gap-4">
                    <div className="flex justify-between">
                        <h1 className="text-base font-bold">
                            Daily Finance Tips
                        </h1> 
                    </div>
                </div> */}
            {/* </BaseCard> */}
        </main>
    )
}



export default function DashboardHome() {
    // @ts-ignore
    const [profile, setProfile] = useState<any>();

    async function  fetchProfile() {
        try {
            const supabase = createClient();
            const {data} = await supabase.auth.getUser();

            const profileData = await supabase.from("profiles").select("*").eq("id", data.user!.id).single();
            setProfile(profileData.data);

        } catch (e) {
            console.log("Error Occured While Fetching Profile: ", e);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <main className="grid my-8 mb-16">
            <div className="max-w-5xl w-full justify-self-center p-4 grid gap-8">
                <div className="grid">
                    <motion.h4 initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: .45 }} className="font-extralight">
                        Welcome back, {profile?.title}
                    </motion.h4>
                    <motion.h1 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: .45, delay: .25 }} className={"text-5xl font-extralight " + urbanist.className}>
                        Dashboard Overview
                    </motion.h1>
                </div>
                <Overview />
                <ProgressBar />
            </div>
        </main>
    )
}