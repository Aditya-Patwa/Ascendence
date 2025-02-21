"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        "question": "What is Ascendence?",
        "answer": "Ascendence is a financial management app designed to help you budget, save, and grow your wealth effortlessly."
    },
    {
        "question": "How does Ascendence reward users?",
        "answer": "Users earn crypto, tokens, or NFTs for achieving their financial goals and managing money effectively."
    },
    {
        "question": "Is Ascendence suitable for families and businesses?",
        "answer": "Yes, Ascendence offers tailored plans for individuals, families, and small businesses."
    },
    {
        "question": "Can I track my expenses automatically?",
        "answer": "Yes, Ascendence categorizes your expenses automatically for easier tracking and management."
    },
    {
        "question": "Does Ascendence provide personalized investment recommendations?",
        "answer": "Yes, Ascendence analyzes your spending habits to provide tailored savings and investment suggestions."
    },
    {
        "question": "What kind of tools are included in the app?",
        "answer": "Ascendence includes budgeting, expense tracking, bill reminders, daily finance tips, and an AI chatbot for assistance."
    },
    {
        "question": "Can I get support if I have questions?",
        "answer": "Yes, our AI chatbot is available 24/7, and premium users receive priority support from our expert team."
    }
];



function Card({ children }: { children: React.ReactNode }) {
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
            className="rounded-2xl cursor-pointer relative overflow-hidden"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 40%)`,
                }}
            />
            {children}
        </main>
    )
}


function QnAs() {
    const [active, setActive] = useState(0);

    return (
        <div className="grid gap-3">
            <AnimatePresence mode="wait">
                {faqs.map((faq, i) =>
                    <Card key={i}>
                        <div className={`px-4 py-4 ${active == i && 'bg-indigo-500 text-white'}`} onClick={() => setActive(i)}>
                            <div className="flex item-center justify-between">
                                <h1 className="text-base md:text-lg font-semibold">
                                    {faq.question}
                                </h1>
                                <span>
                                    <ChevronDown className={`transition-ease duration-200 ${active == i && 'rotate-180'}`} />
                                </span>
                            </div>

                            {active == i && (
                                <motion.div initial={{ opacity: 0, top: -5 }} animate={{ opacity: 1, top: 0 }} exit={{ opacity: 0, top: -5 }}>
                                    <h3 className="text-sm md:text-base font-medium text-left mt-2.5">
                                        {faq.answer}
                                    </h3>
                                </motion.div>
                            )}
                        </div>
                    </Card>
                )}

            </AnimatePresence>
        </div>
    )
}


export default function FAQs() {
    return (
        <section className="py-8 pt-16 px-4 grid" id="faqs">
            <div className="max-w-6xl w-full justify-self-center grid gird-cols-1 md:grid-cols-2 gap-12 md:gap-0">
                <div>
                    <h1 className="text-left text-2xl md:text-3xl font-extrabold">
                        Frequently Asked Questions
                    </h1>
                    <div>
                        <h3 className="text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-300 text-left mt-1.5">
                            Have another question? Contact me on X or by email.
                        </h3>
                    </div>
                </div>

                <div>
                    <QnAs />
                </div>
            </div>
        </section>
    )
}