"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";


const tasks = [
    {
        "title": "Set Your Budget",
        "description": "Define a monthly spending limit and track your expenses in real-time.",
        "icon": "<Budget className='h-12 w-12 text-indigo-500' />"
    },
    {
        "title": "Track Expenses",
        "description": "Sort your expenses into categories for better financial insights.",
        "icon": "<Expenses className='h-12 w-12 text-green-500' />"
    },
    {
        "title": "Automate Savings",
        "description": "Enable automatic savings to meet your financial goals effortlessly.",
        "icon": "<Savings className='h-12 w-12 text-blue-500' />"
    },
    {
        "title": "Earn Rewards",
        "description": "Achieve goals and earn crypto, tokens, or NFTs as incentives.",
        "icon": "<Rewards className='h-12 w-12 text-yellow-500' />"
    },
    {
        "title": "Set Financial Goals",
        "description": "Plan for future milestones by setting long-term financial goals.",
        "icon": "<Goals className='h-12 w-12 text-purple-500' />"
    },
    {
        "title": "Get Investment Tips",
        "description": "Receive personalized recommendations to grow your wealth.",
        "icon": "<Invest className='h-12 w-12 text-orange-500' />"
    },
    {
        "title": "Manage Bills",
        "description": "Stay on top of payments with bill reminders and alerts.",
        "icon": "<Bills className='h-12 w-12 text-red-500' />"
    },
    {
        "title": "Analyze Spending",
        "description": "Review spending patterns to improve financial decisions.",
        "icon": "<Analytics className='h-12 w-12 text-teal-500' />"
    },
    {
        "title": "Consult AI Chatbot",
        "description": "Ask questions and get instant financial advice with our AI chatbot.",
        "icon": "<Chatbot className='h-12 w-12 text-pink-500' />"
    },
    {
        "title": "Upgrade Your Plan",
        "description": "Access advanced features by switching to Accelerator or Prosperity plans.",
        "icon": "<Upgrade className='h-12 w-12 text-gray-500' />"
    }
]


function Card() {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex + 3 > tasks.length) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(c => c + 3);
            }
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const currentTasks = tasks.slice(currentIndex, currentIndex + 3);


    return (
        <main
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer relative overflow-hidden bg-zinc-950 rounded-3xl transition-ease duration-500 relative group border border-zinc-700"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-40"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
            />

            <div className="relative sm:absolute p-8 pb-0 z-50">
                <h1 className="text-xl md:text-3xl text-white font-extrabold opacity-50 group-hover:opacity-100 transition-ease duration-200">
                    Save smart, invest wisely, and watch your wealth grow with <span className="text-emerald-500">Ascendence</span>.
                </h1>
            </div>

            <div className="bg-transparent rounded-3xl shadow-xl relative overflow-hidden absolute aspect-[4/3]">
                <div className="absolute w-full h-full grid place-content-center -bottom-1/2">
                    <div className="p-8 bg-zinc-900/40 rounded-full border border-zinc-900 shadow-xl group-hover:shadow-emerald-900 transition-ease duration-300">
                        <div className="p-8 bg-zinc-900/60 rounded-full border border-zinc-800 shadow-xl group-hover:shadow-emerald-800 transition-ease duration-300">
                            <div className="p-8 bg-zinc-900/80 rounded-full border border-zinc-700 shadow-xl group-hover:shadow-emerald-800 transition-ease duration-300">
                                <div className="p-8 bg-zinc-900 rounded-full border border-zinc-700 shadow-xl group-hover:shadow-emerald-700 transition-ease duration-300 shadow-inset">
                                    <div className="p-8 bg-zinc-800/40 rounded-full border border-zinc-700 shadow-xl group-hover:shadow-emerald-700 transition-ease duration-300">
                                        <div className="p-8 bg-zinc-800/60 rounded-full border border-zinc-700 shadow-xl group-hover:shadow-emerald-600 transition-ease duration-300">
                                            <div className="p-8 bg-zinc-800/80 rounded-full border border-zinc-600 shadow-xl group-hover:shadow-emerald-600 transition-ease duration-300">
                                                <div className="p-8 bg-zinc-800 w-16 h-16 rounded-full border border-zinc-600 shadow-xl group-hover:shadow-emerald-600 transition-ease duration-300 shadow-inset">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-full grid place-content-center z-30 -bottom-1/3 group-hover:-bottom-1/4 transition-ease rotate-6 group-hover:rotate-0 duration-500">
                    <div className="w-44 aspect-[9/16] rounded-3xl bg-zinc-900 border-4 border-zinc-800">
                        <div className="py-2 grid justify-center">
                            <div className="py-1 px-6 rounded-full bg-zinc-800 shadow shadow-zinc-500 group-hover:shadow-emerald-500">

                            </div>
                        </div>
                        <div className="py-4 grid justify-center mt-2">
                            <div>
                                <h1 className="text-[10px] text-center font-light text-zinc-500 group-hover:text-white transition-ease duration-300">
                                    {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()]}, {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()]} {new Date().getDate()}
                                </h1>
                                <h1 className="text-4xl font-bold text-zinc-500 text-center group-hover:text-white transition-ease duration-300">
                                    {new Date().getHours()}:{new Date().getMinutes()}
                                </h1>
                            </div>
                        </div>

                        <div className="py-2 grid justify-center">
                            <img src="Graph.svg" className="opacity-20 group-hover:opacity-100 transition-ease duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default function About() {
    return (
        <section className="grid py-16 my-16 px-4">
            <div className="max-w-7xl w-full justify-self-center md:px-16">
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-left font-black leadine-none tracking-tight">
                        Financial Revolution
                    </h1>
                    <div className="max-w-xs sm:max-w-2xl">
                        <h3 className="text-base md:text-lg font-medium text-zinc-700 dark:text-zinc-300 text-left mt-4">
                            Designed for individuals, families, and businesses, it empowers you to save more, spend wisely, and grow your wealth effortlessly.
                        </h3>
                    </div>
                </div>

                <div className="mt-8 py-4 grid sm:grid-cols-2 gap-4">
                    <Card />
                    <div className="py-16 bg-zinc-950 rounded-3xl shadow-xl">

                    </div>
                    <div className="bg-zinc-950 rounded-3xl shadow-xl">
                    </div>
                    <div className="py-16 bg-zinc-950 rounded-3xl shadow-xl">

                    </div>
                </div>
            </div>
        </section>
    )
}