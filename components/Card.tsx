"use client";
import { useState, useRef, ReactElement } from "react";


export default function Card({icon, title, description}: {icon: ReactElement, title: string, description: string}) {
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
            className="py-8 px-8 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border-0 border-zinc-300 dark:border-zinc-700 cursor-pointer relative overflow-hidden"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 40%)`,
                }}
            />

            <div>
                <div className="absolute blur-xl">    
                    {icon}
                </div>
                {icon}
            </div>

            <div className="mt-4">
                <div>
                    <h1 className={` font-black text-3xl`}>
                        {title}
                    </h1>
                </div>
                <div>
                    <h3 className={`text-lg mt-2 opacity-80`}>
                        {description}
                    </h3>
                </div>
            </div>
        </main>
    )
}