import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-screen py-16 md:py-16 px-6 md:px-12 bg-black dark:bg-white text-white dark:text-black mt-32 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="absolute top-0 z-[2] h-full w-screen bg-transaprent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>
            <div>
                <div className="text-center text-5xl md:text-5xl lg:text-7xl font-bold">
                    <Logo />
                </div>
                <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-4xl mt-2 text-zinc-300 dark:text-zinc-700">
                        Empowering you to ascend beyond financial limits.
                    </h3>
                </div>
            </div>

            <div className="grid place-content-center">
                <div className="grid grid-cols-2 mt-4 lg:mt-6">
                    <div>
                        <div className="text-2xl font-extrabold text-indigo-500 dark:text-indigo-600">
                            LINKS
                        </div>

                        <div className="grid gap-2 mt-4 text-xl text-zinc-400 dark:text-zinc-700">
                            <Link href="/">
                                Products
                            </Link>
                            <Link href="/">
                                About
                            </Link>
                            <Link href="/">
                                Pricing
                            </Link>
                            <Link href="/">
                                FAQs
                            </Link>
                            <Link href="/">
                                Feedback
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-2xl font-extrabold text-indigo-500 dark:text-indigo-600">
                            COMPANY
                        </div>

                        <div className="grid gap-2 mt-4 text-xl text-zinc-400 dark:text-zinc-700">
                            <Link href="/">
                                Terms and Condition
                            </Link>
                            <Link href="/">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
