
interface CustomToggleProps {
    isChecked: boolean
    onToggle: () => void
    labelLeft: string
    labelRight: string
}

const CustomToggle: React.FC<CustomToggleProps> = ({
    isChecked,
    onToggle,
    labelLeft,
    labelRight
}) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${isChecked ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-500 dark:text-zinc-300'}`}>
                {labelLeft}
            </span>
            <button
                onClick={onToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isChecked ? 'bg-indigo-500' : 'bg-zinc-700'
                    }`}
                role="switch"
                aria-checked={isChecked}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isChecked ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </button>
            <span className={`text-sm font-medium ${isChecked ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-500 dark:text-zinc-300'}`}>
                {labelRight}
            </span>
            <span className="ml-2 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                Save 40%
            </span>
        </div>
    )
}

export default CustomToggle;