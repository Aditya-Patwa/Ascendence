import { signOutAction } from "@/app/actions";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";

export default function DashboardHeader() {
    return (
        <>
            <header className="w-screen px-4 py-4 lg:py-4 lg:px-8 border-b dark:border-zinc-800 border-zinc-100 flex justify-between items-center">
                <div className="flex gap-4 text-xl md:text-3xl lg:text-4xl font-bold items-center">
                    <button className="h-10 w-10 grid place-content-center bg-light dark:bg-black border border-zinc-200 dark:border-zinc-600 text-black dark:text-white rounded-xl font-bold relative overflow-hidden">
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                            style={{
                                opacity: 1,
                                background: `radial-gradient(200px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                            }}
                        />
                        <Menu size={20} />
                    </button>
                    <Logo />
                </div>
                <div className="flex gap-2 text-xl">
                    <ModeToggle />
                    <form action={signOutAction}>
                        <button type="submit" className="bg-transparent border border-zinc-500 dark:border-zinc-600 text-black dark:text-white px-4 text-nowrap py-2 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl font-bold relative overflow-hidden">
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
                                style={{
                                    opacity: 1,
                                    background: `radial-gradient(600px circle at 50% -50%, rgba(255,255,255,.15), transparent 40%)`,
                                }}
                            />
                            Sign Out
                            {/* <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,157,255,0.5),rgba(255,255,255,0))] z-20"></div> */}
                        </button>
                    </form>
                </div>
            </header>
        </>
    )
}