"use client";
import { useState, useRef } from "react";


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
            className="cursor-pointer relative overflow-hidden bg-zinc-950 rounded-3xl transition-ease duration-500 relative group border border-zinc-700"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-70"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
            />

            <div className="relative sm:absolute p-8 pb-0 z-50">
                <h1 className="text-xl md:text-3xl text-white font-extrabold opacity-70 group-hover:opacity-100 transition-ease duration-200">
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
