import Link from "next/link";

export default function Header() {
    return (
        <header className="w-screen px-6 py-6 flex justify-between items-center bg-black">
            <div>
                <Link href={"/"} className="text-white text-3xl font-bold">
                    ascendence
                </Link>
            </div>
        </header>
    )
}