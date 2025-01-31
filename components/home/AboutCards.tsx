"use client";
import { useState, useRef } from "react";
import Logo from "../Logo";
import { AnimatePresence, motion } from "motion/react";
import { Bell, CircleX } from "lucide-react";


export function MobileCard() {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

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

    return (
        <main
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer relative overflow-hidden bg-zinc-950 rounded-3xl transition-ease duration-500 relative group border border-zinc-700 grid"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-70"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
            />

            <div className="relative lg:absolute p-8 pb-0 z-50">
                <h1 className="text-xl lg:text-3xl text-white font-extrabold opacity-70 group-hover:opacity-100 transition-ease duration-200">
                    Save smart, invest wisely, and watch your wealth grow with <span className="text-emerald-500">Ascendence</span>.
                </h1>
            </div>

            <div className="bg-transparent rounded-3xl shadow-xl relative overflow-hidden absolute aspect-[4/3] self-end">
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




export function CreditCard() {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

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

    return (
        <main
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer relative overflow-hidden bg-zinc-950 rounded-3xl transition-ease duration-500 relative group border border-zinc-700 min-h-[400px]"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-70"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
            />



            <div className="bg-transparent rounded-3xl shadow-xl relative overflow-hidden w-full h-full opacity-50 group-hover:opacity-100 transition-ease duration-300">
                <div className="w-full h-full absolute bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
                <div className="w-full h-full grid z-30 transition-ease group-hover:rotate-0 duration-500 z-20">
                    {/* <div className="absolute w-[80%] lg:w-[60%] aspect-video rounded-3xl justify-self-center mt-16 bg-zinc-900 border-4 border-zinc-800 grid grid-rows-4 overflow-hidden shadow-2xl group-hover:shadow-indigo-600/40 origin-left group-hover:-rotate-12 transition-ease duration-300">
                        <div className="p-4 text-white row-span-3 grid">
                            <div>
                                <Logo />
                            </div>

                            <div className="text-lg font-bold flex items-end">
                                0123 4556 7654 9273
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-600 flex justify-between text-white items-center">
                            <div>
                                <h1 className="text-base font-light">
                                    Aditya Patwa
                                </h1>
                            </div>

                            <div className="flex gap-1 items-baseline">
                                <span className="text-xs text-zinc-300">
                                    Exp
                                </span>
                                <span className="text-zinc-50 text-sm font-bold">09/29</span>
                            </div>
                        </div>
                    </div> */}



                    <div className="absolute w-[80%] lg:w-[60%] aspect-video rounded-3xl justify-self-center mt-16 bg-zinc-900 border-4 border-zinc-800 grid grid-rows-4 overflow-hidden shadow-2xl group-hover:shadow-indigo-600/40 origin-left group-hover:-rotate-6 transition-ease duration-300">
                        <div className="p-4 text-white row-span-3 grid">
                            <div>
                                <Logo />
                            </div>

                            <div className="text-lg font-bold flex items-end">
                                0123 4556 7654 9273
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-600 flex justify-between text-white items-center">
                            <div>
                                <h1 className="text-base font-light">
                                    Aditya Patwa
                                </h1>
                            </div>

                            <div className="flex gap-1 items-baseline">
                                <span className="text-xs text-zinc-300">
                                    Exp
                                </span>
                                <span className="text-zinc-50 text-sm font-bold">09/29</span>
                            </div>
                        </div>
                    </div>


                    <div className="absolute w-[80%] lg:w-[60%] aspect-video rounded-3xl justify-self-center mt-16 bg-zinc-900 border-4 border-zinc-800 grid grid-rows-4 overflow-hidden shadow-2xl group-hover:shadow-indigo-600/40 transition-ease duration-300">
                        <div className="p-4 text-white row-span-3 grid">
                            <div>
                                <Logo />
                            </div>

                            <div className="text-lg font-bold flex items-end">
                                0123 4556 7654 9273
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-600 flex justify-between text-white items-center">
                            <div>
                                <h1 className="text-base font-light">
                                    Aditya Patwa
                                </h1>
                            </div>

                            <div className="flex gap-1 items-baseline">
                                <span className="text-xs text-zinc-300">
                                    Exp
                                </span>
                                <span className="text-zinc-50 text-sm font-bold">09/29</span>
                            </div>
                        </div>
                    </div>


                    <div className="absolute w-[80%] lg:w-[60%] aspect-video rounded-3xl justify-self-center mt-16 bg-zinc-900 border-4 border-zinc-800 grid grid-rows-4 overflow-hidden shadow-2xl group-hover:shadow-indigo-600/40 origin-left group-hover:rotate-6 transition-ease duration-300">
                        <div className="p-4 text-white row-span-3 grid">
                            <div>
                                <Logo />
                            </div>

                            <div className="text-lg font-bold flex items-end">
                                0123 4556 7654 9273
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-600 flex justify-between text-white items-center">
                            <div>
                                <h1 className="text-base font-light">
                                    Aditya Patwa
                                </h1>
                            </div>

                            <div className="flex gap-1 items-baseline">
                                <span className="text-xs text-zinc-300">
                                    Exp
                                </span>
                                <span className="text-zinc-50 text-sm font-bold">09/29</span>
                            </div>
                        </div>
                    </div>



                    {/* <div className="absolute w-[80%] lg:w-[60%] aspect-video rounded-3xl justify-self-center mt-16 bg-zinc-900 border-4 border-zinc-800 grid grid-rows-4 overflow-hidden shadow-2xl group-hover:shadow-indigo-600/40 origin-left group-hover:rotate-12 transition-ease duration-300">
                        <div className="p-4 text-white row-span-3 grid">
                            <div>
                                <Logo />
                            </div>

                            <div className="text-lg font-bold flex items-end">
                                0123 4556 7654 9273
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-600 flex justify-between text-white items-center">
                            <div>
                                <h1 className="text-base font-light">
                                    Aditya Patwa
                                </h1>
                            </div>

                            <div className="flex gap-1 items-baseline">
                                <span className="text-xs text-zinc-300">
                                    Exp
                                </span>
                                <span className="text-zinc-50 text-sm font-bold">09/29</span>
                            </div>
                        </div>
                    </div> */}


                </div>


            </div>


            <div className="absolute p-8 items-end bottom-0">
                <h1 className="text-xl lg:text-3xl text-white font-extrabold opacity-70 group-hover:opacity-100 transition-ease duration-200">
                    Manage cards, track payments, and never miss a bill with <span className="text-indigo-600">Ascendence</span>.
                </h1>
            </div>

        </main>
    )
}


export function ChatCard() {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

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

    return (
        <main
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer relative overflow-hidden bg-zinc-950 rounded-3xl transition-ease duration-500 relative group border border-zinc-700 min-h-[400px]"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-70"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
            />

            <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff17_1px,transparent_1px),linear-gradient(to_bottom,#ffffff17_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>


            <div className="bg-transparent rounded-3xl h-[70%] shadow-xl relative overflow-hidden">
                <div className="w-full h-full grid">
                    <AnimatePresence mode="wait">
                        {opacity == 0 ? (
                            <motion.div initial={{ opacity: 0, scale: .9 }} key={"bell"} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.15 }} className="w-20 h-20 rounded-full grid place-content-center justify-self-center self-center border border-zinc-700 shadow-2xl shadow-white/20 rotate-45">
                                <Bell className="h-10 w-10 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .9 }} className="w-[80%] md:w-[70%] border-4 border-zinc-800 bg-zinc-900 p-4 rounded-2xl justify-self-center self-center shadow-2xl shadow-yellow-700/20" key={"messageBox"}>
                                <div className="">
                                    <h1 className="text-lg font-bold text-white">
                                        Today
                                    </h1>
                                </div>

                                <div className="pt-4 grid gap-2">
                                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .25 }} className="bg-teal-600 rounded-lg text-white p-2 px-3 flex justify-between items-center">
                                        <h1 className="text-sm md:text-base font-semibold">
                                            Pay upcoming electricity bill
                                        </h1>
                                        <span>
                                            <CircleX className="h-4 w-4 text-white" />
                                        </span>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .75 }} className="bg-rose-600 rounded-lg text-white p-2 px-3 flex justify-between items-center">
                                        <h1 className="text-sm md:text-base font-semibold">
                                            Market seems to fall—stay alert
                                        </h1>
                                        <span>
                                            <CircleX className="h-4 w-4 text-white" />
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="p-8 absolute bottom-0">
                <h1 className="text-xl lg:text-3xl text-white font-extrabold opacity-70 group-hover:opacity-100 transition-ease duration-200">
                    Manage cards, track payments, and never miss a bill with <span className="text-yellow-600">Ascendence</span>.
                </h1>
            </div>
        </main>
    )
}