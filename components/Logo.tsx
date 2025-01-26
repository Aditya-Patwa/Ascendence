import { urbanist } from "./fonts"

export default function Logo() {
    return (
        <div className="flex items-center gap-1">
            <div className="relative rotate-45">
                <h1 className={`${urbanist.className} text-indigo-600`}>
                    a
                </h1>
                <h1 className={`${urbanist.className} text-indigo-600 absolute scale-x-[-1] top-0 -left-[1px]`}>
                    a
                </h1>
            </div>
            <div>
                <h1 className={`${urbanist.className}`}>
                    ascendence
                </h1>
            </div>
        </div>
    )
}