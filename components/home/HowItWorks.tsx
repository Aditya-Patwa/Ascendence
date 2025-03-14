"use client";
import { motion } from "motion/react";

const steps = [
    {
        headline: "Set Your Goals",
        description: "Define your financial objectives—whether it's saving, investing, or sticking to a budget.",
        color: "text-indigo-600",
        bgColor: "bg-indigo-600"
    },
    {
        headline: "Track Your Spending",
        description: "Monitor and categorize your expenses in real-time to stay within your budget.",
        color: "text-rose-600",
        bgColor: "bg-rose-600"
    },
    {
        headline: "Automate Savings",
        description: "Enable automated transfers to hit your savings or investment targets effortlessly.",
        color: "text-teal-600",
        bgColor: "bg-teal-600"
    },
    {
        headline: "Get Personalized Insights",
        description: "Receive tailored financial tips, budget suggestions, and investment strategies that suit your goals.",
        color: "text-blue-600",
        bgColor: "bg-blue-600"
    },
    {
        headline: "Stay Notified",
        description: "Get alerts for bill payments, spending limits, and market updates to keep you on track.",
        color: "text-fuchsia-600",
        bgColor: "bg-fuchsia-600"
    },
    {
        headline: "Earn Rewards",
        description: "Achieve your financial goals and get rewarded with points, tokens, or crypto incentives.",
        color: "text-purple-600",
        bgColor: "bg-purple-600"
    },
    {
        headline: "Ask Your AI Companion",
        description: "Use our AI chatbot for instant financial guidance and support whenever you need it.",
        color: "text-orange-600",
        bgColor: "bg-orange-600"
    },
    {
        headline: "Track Progress Over Time",
        description: "Visualize your financial growth with intuitive charts, reports, and analytics.",
        color: "text-emerald-600",
        bgColor: "bg-emerald-600"
    }
];

export default function HowItWorks() {
    return (
        <section className="my-8 py-8 md:py-16 bg-indigo-600 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:24px_24px] grid">
            <div className="max-w-6xl w-full justify-self-center p-4 md:p-8">
                <div className="overflow-y-hidden">
                    <motion.h1 initial={{y: "100%", opacity: 0}} whileInView={{y: "0", opacity: 1}} transition={{delay: .25}} className="text-5xl md:text-7xl font-black text-white">
                        How It Works
                    </motion.h1>
                </div>
                <div className="mt-2 overflow-y-hidden">
                    <motion.h3 initial={{y: "100%", opacity: 0}} whileInView={{y: "0", opacity: 1}} transition={{delay: .25}} className="text-xl md:text-2xl font-light text-zinc-200">
                        Effortless Steps to Master Your Money
                    </motion.h3>
                </div>

                <div className="grid gap-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {steps.map((step, i) =>
                            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .65, duration: .45, ease: "linear"}} className="bg-white p-4 rounded-xl cursor-pointer shadow-lg" key={i}>
                                <div className="flex gap-2 items-center">
                                    <div className={`${step.bgColor} w-6 h-6 text-white rounded grid place-content-center`}>
                                        {i+1}
                                    </div>
                                    <h1 className={`text-lg ${step.color} font-semibold`}>
                                        {step.headline}
                                    </h1>
                                </div>

                                <div className="mt-3 text-base font-medium text-zinc-800">
                                    {step.description}
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .65, duration: .45, ease: "linear"}} className="rounded-3xl bg-black overflow-hidden aspect-video shadow-2xl flex items-center mt-4 md:mt-8">
                        <img src="AscendenceFrame.png" className="" />
                    </motion.div>

                    
                </div>
            </div>


        </section>
    )
}