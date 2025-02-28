"use client";
import { useState, useRef } from "react";
import CustomToggle from "./CustomToggle";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";

export function Plan({ children }: { children: React.ReactNode }) {
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
        <motion.main
            initial={{y: 20, opacity: 0, filter: "blur(4px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} transition={{delay: .15, duration: .5, ease: "easeOut"}}
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
        </motion.main>
    )
}

function SubscriptionPlans({isYearly}: {isYearly: boolean}) {
    return (
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-16 sm:px-8 lg:px-16 max-w-3xl lg:max-w-7xl w-full justify-self-center">
            <Plan>
                <div className="px-8 py-8 bg-zinc-50 dark:bg-zinc-900 h-full">
                    <div>
                        <h1 className="text-5xl font-semibold mt-4 flex">
                            {isYearly ? (
                                <>
                                    $69<span className="text-3xl self-end">/year</span>
                                </>
                            ) : (
                                <> 
                                    $9<span className="text-3xl self-end">/month</span>
                                </>
                            )}
                        </h1>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">
                            Starter
                        </h1>

                        <h3 className="text-lg mt-2">
                            Lay the groundwork for your financial success with essential tools and insights.
                        </h3>
                    </div>

                    <div className="pt-4 grid text-center">
                        <Link href={"/"} className="py-2 border border-zinc-950/20 dark:border-zinc-100/20 rounded-full mt-4 font-bold">
                            Get Started
                        </Link>
                    </div>

                    <div className="mt-8 grid gap-2">
                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Goal-Based Budgeting</span>
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="text-indigo-500 h-5 w-5" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Expense Categorization</span>
                                </h3>
                            </div>
                        </div>


                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Bill Reminders & Alerts</span>
                                </h3>
                            </div>
                        </div>



                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Periodically Finance Tips</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Plan>

            <Plan>
                <div className="px-8 py-8 bg-zinc-50 dark:bg-zinc-900 h-full">
                    <div>
                        <h1 className="text-5xl font-semibold mt-4 flex">
                            {isYearly ? (
                                <>
                                    $149<span className="text-3xl self-end">/year</span>
                                </>
                            ) : (
                                <> 
                                    $19<span className="text-3xl self-end">/month</span>
                                </>
                            )}
                        </h1>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">
                            Accelerator
                        </h1>

                        <h3 className="text-lg mt-2">
                            Fast-track your growth with advanced features and personalized recommendations.
                        </h3>
                    </div>

                    <div className="pt-4 grid text-center">
                        <Link href={"/"} className="py-2 border border-zinc-950/20 dark:border-zinc-100/20 rounded-full mt-4 font-bold">
                            Get Started
                        </Link>
                    </div>



                    <div className="mt-8 grid gap-2">
                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    Includes all <span className="font-bold">Starter Plan</span> features.
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="text-indigo-500 h-5 w-5" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Automated Savings Tools</span>
                                </h3>
                            </div>
                        </div>


                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Personalized Financial Recommendations</span>
                                </h3>
                            </div>
                        </div>



                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-indigo-500" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>AI Chatbot Assistance</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </Plan>

            <Plan>
                <div className="px-8 py-8 bg-indigo-600 text-white h-full">
                    <div>
                        <h1 className="text-5xl font-semibold mt-4 flex">
                            {isYearly ? (
                                <>
                                    $359<span className="text-3xl self-end">/year</span>
                                </>
                            ) : (
                                <> 
                                    $49<span className="text-3xl self-end">/month</span>
                                </>
                            )}
                        </h1>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">
                            Prosperity
                        </h1>

                        <h3 className="text-lg mt-2">
                            Unlock your full potential with premium tools to achieve long-term wealth and success.
                        </h3>
                    </div>

                    <div className="pt-4 grid text-center">
                        <Link href={"/"} className="py-2 bg-white rounded-full text-indigo-600 mt-4 font-bold">
                            Get Started
                        </Link>
                    </div>


                    <div className="mt-8 grid gap-2">
                        <div className="flex items-center gap-2">
                            <div className="h-full mt-2">
                                <CircleCheck className="h-5 w-5 text-white" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    Includes all <span className="font-bold">Starter Plan</span> and <span className="font-bold">Accelerator Plan</span> features.
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="text-white h-5 w-5" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Plans for Everyone</span>
                                </h3>
                            </div>
                        </div>


                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-white" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Incentives for Financial Success</span>
                                </h3>
                            </div>
                        </div>



                        <div className="flex items-center gap-2">
                            <div>
                                <CircleCheck className="h-5 w-5 text-white" />
                            </div>

                            <div>
                                <h3 className="text-base">
                                    <span>Priority Support</span>
                                </h3>
                            </div>
                        </div>
                    </div>



                </div>
            </Plan>
        </div>
    )
}


export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false)

    const handleToggle = () => {
        setIsYearly(!isYearly)
    }


    return (
        <motion.section initial={{y: 20, opacity: 0, filter: "blur(4px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} transition={{ duration: 1.15, ease: "linear"}} className="py-16 px-4 mt-8 relative" id="pricing">
            <div className="grid justify-center gap-2">
                <h1 className="text-center text-5xl md:text-6xl font-extrabold">
                    Invest in Your <span className="underline decoration-dashed decoration-6 decoration-indigo-600 underline-offset-4">Financial</span> Future
                </h1>
                <div className="sm:max-w-xl md:max-w-3xl relative">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-zinc-700 dark:text-zinc-300 text-center mt-4">
                        Choose a plan tailored to your goals and take control of your finances with smart tools and insights.
                    </h3>
                </div>
            </div>

            <div className="mt-8 grid justify-center">
                <CustomToggle
                    isChecked={isYearly}
                    onToggle={handleToggle}
                    labelLeft="Monthly"
                    labelRight="Yearly"
                />
            </div>

            <SubscriptionPlans isYearly={isYearly} />
        </motion.section>
    )
}