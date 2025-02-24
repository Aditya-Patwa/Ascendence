"use client";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { signInWithMagicLinkAction } from "../actions";
import { useEffect, useState } from "react";

export type Message =
    | { success: string }
    | { error: string }
    | { message: string };


export default function GetStarted(props: {
    searchParams: Promise<Message>;
}) {
    const [msg, setMsg] = useState<Message | null>(null);
    // const [isMsg, setIsMsg] = useState(false);

    async function fetchMsg() {
        const searchParams = await props.searchParams;
        // console.log(searchParams);
        // if ("message" in searchParams) {
            setMsg(searchParams);
            // setIsMsg(true);
        // }
    }

    useEffect(() => {
        fetchMsg();
    }, []);

    return (
        <section className="w-screen overflow-x-hidden min-h-screen grid relative px-4 py-24">
            {/* <div className="absolute w-[50vw] aspect-square top-0 right-0 rounded-full bg-indigo-600/80 -translate-y-1/3 translate-x-1/3 blur-[180px] z-20"></div>
            <div className="absolute w-[50vw] aspect-square bottom-0 left-0 rounded-full bg-indigo-600/80 translate-y-1/3 -translate-x-1/3 blur-[180px] z-20"></div> */}
            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="absolute p-4 lg:px-16 z-30 max-w-6xl w-full justify-self-center">
                <Link href={"/"} className="flex items-center gap-1 group">
                    <div>
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-200 duration-200" />
                    </div>
                    <div>
                        <h1 className="text-base font-semibold">
                            Home
                        </h1>
                    </div>
                </Link>
            </motion.div>

            {msg && (
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .65 }} className="grid my-4 mb-8 text-sm font-semibold">
                    {"success" in msg! && (
                        <div className="max-w-sm w-full justify-self-center p-2 px-4 text-emerald-500 border rounded-xl border-emerald-500/50 bg-emerald-500/20">
                            {msg.success}
                        </div>
                    )}
                    {"error" in msg! && (
                        <div className="max-w-sm w-full justify-self-center p-2 px-4 text-rose-500 border rounded-xl border-rose-500/50 bg-rose-500/20">
                            {msg.error}
                        </div>
                    )}
                    {"message" in msg! && (
                        <div className="max-w-sm w-full justify-self-center p-2 px-4 text-indigo-400 border rounded-xl border-indigo-500/50 bg-indigo-500/20">
                            {msg.message}
                        </div>
                    )}
                </motion.div>
            )}

            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-sm w-full justify-self-center">
                <div className="grid">
                    <h1 className="text-center text-lg md:text-xl font-extrabold">
                        Take Charge of Your Financial Future
                    </h1>
                    <div>
                        <h3 className="text-base font-light text-zinc-700 dark:text-zinc-300 text-center mt-1.5">
                            Join Ascendence today and unlock smarter tools, personalized insights, and rewards to grow your wealth effortlessly.
                        </h3>
                    </div>
                </div>

                <div className="px-4 grid gap-2 mt-8 pb-8 border-b border-zinc-200 dark:border-zinc-700 relative">
                    <div className="absolute bottom-0 justify-self-center bg-white dark:bg-black px-2 text-zinc-400 dark:text-zinc-600 translate-y-1/2">or</div>
                    <Link href={"/"} className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        <div>
                            <img src={"/google.png"} className="w-4" />
                        </div>
                        <div>Continue With Google</div>
                    </Link>
                </div>

                <form action={signInWithMagicLinkAction} className="px-4 grid gap-2 mt-8 pb-8 gap-2">
                    <div>
                        <input type="email" name="email" placeholder="Enter Email" className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                    </div>
                    <button type="submit" className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-base lg:text-md font-bold relative overflow-hidden flex gap-2 justify-center items-center">
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        <div>Continue</div>
                    </button>
                    {/* </form> */}
                </form>

                <div className="px-6 mt-2">
                    <h3 className="text-sm font-light text-zinc-600 dark:text-zinc-400 text-center mt-1.5">
                        By using our app you agree to our <span className="text-black dark:text-white">Privacy Policy</span> and <span className="text-black dark:text-white">Terms of Use</span>.
                    </h3>
                </div>
            </motion.div>
        </section>
    )
}