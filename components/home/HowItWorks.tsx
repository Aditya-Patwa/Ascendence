const steps = [
    {
        headline: "Set Your Goals",
        description: "Define your financial objectives—whether it's saving, investing, or sticking to a budget.",
        color: "indigo-600"
    },
    {
        headline: "Track Your Spending",
        description: "Monitor and categorize your expenses in real-time to stay within your budget.",
        color: "rose-600"
    },
    {
        headline: "Automate Savings",
        description: "Enable automated transfers to hit your savings or investment targets effortlessly.",
        color: "teal-600"
    },
    {
        headline: "Get Personalized Insights",
        description: "Receive tailored financial tips, budget suggestions, and investment strategies that suit your goals.",
        color: "blue-600"
    },
    {
        headline: "Stay Notified",
        description: "Get alerts for bill payments, spending limits, and market updates to keep you on track.",
        color: "indigo-600"
    },
    {
        headline: "Earn Rewards",
        description: "Achieve your financial goals and get rewarded with points, tokens, or crypto incentives.",
        color: "rose-600"
    },
    {
        headline: "Ask Your AI Companion",
        description: "Use our AI chatbot for instant financial guidance and support whenever you need it.",
        color: "orange-600"
    },
    {
        headline: "Track Progress Over Time",
        description: "Visualize your financial growth with intuitive charts, reports, and analytics.",
        color: "teal-600"
    }
];

export default function HowItWorks() {
    return (
        <section className="my-8 py-8 md:py-16 bg-indigo-600 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:24px_24px] grid">
            <div className="max-w-6xl w-full justify-self-center p-4 md:p-8">
                <div>
                    <h1 className="text-5xl md:text-7xl font-black text-white">
                        How It Works
                    </h1>
                </div>
                <div className="mt-2">
                    <h3 className="text-xl md:text-2xl font-light text-zinc-200">
                        Effortless Steps to Master Your Money
                    </h3>
                </div>

                <div className="grid gap-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {steps.map((step, i) =>
                            <div className="bg-white p-4 rounded-xl cursor-pointer shadow-lg" key={i}>
                                <div className="flex gap-2 items-center">
                                    <div className={`bg-${step.color} w-6 h-6 text-white rounded grid place-content-center`}>
                                        {i+1}
                                    </div>
                                    <h1 className={`text-lg text-${step.color} font-semibold`}>
                                        {step.headline}
                                    </h1>
                                </div>

                                <div className="mt-3 text-base font-medium text-zinc-800">
                                    {step.description}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="rounded-3xl bg-black overflow-hidden aspect-video shadow-2xl flex items-center mt-4 md:mt-8">
                        <img src="AscendenceFrame.png" className="" />
                    </div>

                    
                </div>
            </div>


        </section>
    )
}