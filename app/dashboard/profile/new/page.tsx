"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


function ProfileSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Define Your Financial Persona
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Let&apos;s personalize your experience—choose how you&apos;ll be known in the world of wealth-building.
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        What should we call you?
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        I am a...
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>
            </div>
        </div>
    )
}

function GoalSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Set Your Wealth-Building Destination
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Define your financial goals so we can craft the best path to success.
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Goal
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Timeframe for Goal
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Risk Appetite
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>
            </div>
        </div>
    )
}


function InvestmentSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Align Your Investments with Your Future
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Tell us how you want to grow your wealth, and we&apos;ll help you optimize every step.
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Preferred Investment Type
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Investment Frequency
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Auto-Savings Plan?
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>
            </div>
        </div>
    )
}


function MoneyFlowSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Master Your Money Flow
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Gain total control over your spending with structured budgeting and insights.
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Monthly Income Range
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Expense Tracking Preferences
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Set Monthly Budget Limit?
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>
            </div>
        </div>
    )
}


function PreferencesSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Customize Your Financial Experience
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Set up reminders, notifications, and your personalized finance assistant.
                </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Enable Smart Alerts?
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>

                <div className="grid gap-1">
                    <label className="text-sm font-bold ml-2">
                        Preferred Mode of Insights?
                    </label>
                    <input type="text" placeholder='e.g., "Captain Cashflow," "Byte Banker"' className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm lg:text-md font-light relative overflow-hidden flex gap-2 justify-center items-center w-full outline-none" />
                </div>
            </div>
        </div>
    )
}

function ReviewSection() {
    return (
        <div className="grid gap-6">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold">
                    Review & Launch Your Financial Journey
                </h1>
                <h3 className="text-base max-w-lg font-light">
                    Take a final look at your setup—make sure everything aligns with your goals before we set things in motion!
                </h3>
            </div>

            <div className="grid gap-12 mt-8">
                <ProfileSection />
                <GoalSection />
                <InvestmentSection />
                <MoneyFlowSection />
                <PreferencesSection />
            </div>
        </div>
    )
}



export default function ProfileNew() {
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(true);
    const sections = [<ProfileSection />, <GoalSection />, <InvestmentSection />, <MoneyFlowSection />, <PreferencesSection />, <ReviewSection />];

    return (
        <div className="p-4 grid mb-16 mt-8">
            <div className="justify-self-center max-w-5xl p-4 w-full">
                <div className="text-2xl font-light mb-4">
                    Complete Your Setup & Watch Your Wealth Ascend!
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
                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-full">
                        <motion.div initial={{ width: "0%" }} animate={{ width: `${counter * 20}%` }} className="bg-emerald-500 py-1 rounded-full">
                        </motion.div>
                    </div>
                </div>


                <div className="py-8 my-8 min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        <motion.div initial={direction ? ({ y: 20, opacity: 0, filter: "blur(4px)" }) : ({ y: -20, opacity: 0, filter: "blur(4px)" })} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={direction ? ({ y: -20, opacity: 0, filter: "blur(4px)" }) : ({ y: 20, opacity: 0, filter: "blur(4px)" })} transition={{ duration: .35, ease: "easeInOut" }} key={counter} className="grid gap-2">
                            {sections[counter % 6]}
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