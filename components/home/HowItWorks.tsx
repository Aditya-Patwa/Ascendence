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
                    <div className="rounded-3xl bg-black overflow-hidden aspect-video shadow-2xl flex items-center">
                        <img src="AscendenceFrame.png" className="" />
                    </div>
                </div>
            </div>


        </section>
    )
}