import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-screen py-8 md:py-16 px-6 md:px-12 bg-black dark:bg-white text-white dark:text-black mt-32">
            <div className="text-center text-5xl md:text-8xl font-bold">
                <Logo />
            </div>
        </footer>
    )
}