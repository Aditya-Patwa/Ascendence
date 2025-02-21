"use client";
import { BadgeDollarSign, BellRing, Bot, Goal, NotebookPen, PaintbrushVertical, PiggyBank, UsersRound, Wallet } from "lucide-react";
import Card from "../Card";
import { motion } from "motion/react";


const features = [
  {
    "headline": "Smart Goal-Based Budgeting",
    "content": "Set Limits, Save More - Create monthly budgets, track spending, and earn bonus points for staying within limits.",
    "icon": <Goal className="h-16 w-16 text-indigo-500" />
  },
  {
    "headline": "Seamless Expense Categorization",
    "content": "Know Where Your Money Goes - Automatically sort expenses into categories for better insights and smarter financial decisions.",
    "icon": <PaintbrushVertical className="h-16 w-16 text-rose-500" />
  },
  {
    "headline": "Automated Savings Tools",
    "content": "Save Without Thinking - Set a minimum amount to save or invest regularly and watch your wealth grow effortlessly.",
    "icon": <PiggyBank className="h-16 w-16 text-emerald-500" />
  },
  {
    "headline": "Personalized Financial Recommendations",
    "content": "Advice Tailored to You - Get customized savings and investment suggestions based on your goals, preferences, and spending patterns.",
    "icon": <Wallet className="h-16 w-16 text-fuchsia-500" />
  },
  {
    "headline": "Bill Reminders and Alerts",
    "content": "Never Miss a Payment - Stay on top of due dates with automated bill reminders and alerts for spending limits.",
    "icon": <BellRing className="h-16 w-16 text-orange-500" />
  },
  {
    "headline": "Daily Finance Tips",
    "content": "Small Tips, Big Impact - Receive daily insights and actionable tips to stay on track with your budget and goals.",
    "icon": <NotebookPen className="h-16 w-16 text-sky-500" />
  },
  {
    "headline": "Plans for Everyone",
    "content": "Built for Individuals, Families, and Businesses - Flexible plans designed to cater to your unique financial needs, from personal to professional.",
    "icon": <UsersRound className="h-16 w-16 text-teal-500" />
  },
  {
    "headline": "AI Chatbot Assistance",
    "content": "Finance Made Friendly - Ask questions, get advice, and enjoy a human-like touch with our intelligent AI chatbot.",
    "icon": <Bot className="h-16 w-16 text-red-500" />
  },
  {
    "headline": "Incentives for Financial Success",
    "content": "Earn as You Save - Achieve goals, manage money wisely, and earn crypto, tokens, or NFTs as rewards.",
    "icon": <BadgeDollarSign className="h-16 w-16 text-yellow-500" />
  }
];



export default function Features() {
    return (
        <main className="mt-12 px-4 py-8 relative" id="products">
            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .65, duration: .45, ease: "linear"}} className="grid justify-center gap-2">
                <div>
                    <h1 className="text-center text-5xl md:text-6xl font-extrabold">
                        Grow Money, Live Smarter
                    </h1>
                </div>
                <div className="sm:max-w-xl md:max-w-3xl">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-zinc-700 dark:text-zinc-300 text-center mt-4">
                        Track expenses, save effortlessly, and achieve your financial goals—all in one app.
                    </h3>
                </div>
            </motion.div>

            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 sm:px-8 lg:px-16 max-w-7xl justify-self-center">
                {features.map((feature, i) => 
                    <Card key={i} icon={feature.icon} title={feature.headline} description={feature.content} />
                )}
            </div>
        </main>
    )
}