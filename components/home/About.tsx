export default function About() {
    return (
        <section className="grid py-16 my-16 px-4 bg-indigo-600">
            <div className="max-w-7xl w-full justify-self-center md:px-16">
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-left font-black leadine-none tracking-tight text-white">
                        Financial Revolution
                    </h1>
                    <div className="max-w-xs sm:max-w-2xl">
                        <h3 className="text-base md:text-lg font-medium text-zinc-300 text-left mt-4">
                            Designed for individuals, families, and businesses, it empowers you to save more, spend wisely, and grow your wealth effortlessly.
                        </h3>
                    </div>
                </div>

                <div className="mt-8 py-4 grid sm:grid-cols-5 gap-4">
                    <div className="sm:col-span-2 py-16 bg-zinc-950 rounded-3xl shadow-xl aspect-[4/3]">

                    </div>
                    <div className="sm:col-span-3 py-16 bg-zinc-950 rounded-3xl shadow-xl">

                    </div>
                    <div className="sm:col-span-3 overflow-hidden bg-zinc-950 rounded-3xl shadow-xl">
                    </div>
                    <div className="sm:col-span-2 py-16 bg-zinc-950 rounded-3xl shadow-xl aspect-[4/3]">

                    </div>
                </div>
            </div>
        </section>
    )
}