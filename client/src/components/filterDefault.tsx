import { useEffect, useRef, useState } from "react"

type cardFilter = {
    name: string
    isOpen: boolean
    onToggle: () => void
    options: string[]
    onSelect: (value: string) => void
    selected: string
}

const FilterDefault = ({ name }: cardFilter) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(name)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const onSelect = (value: string) => {
        setSelected(value)
        setOpen(false)
    }

    return (
        <div ref={ref} className="relative inline-block">
            <div
                onClick={() => setOpen(!open)}
                className={`flex items-center justify-between border border-gray-600 h-9 w-[180px] px-3 rounded-lg text-sm text-black cursor-pointer bg-white hover:bg-gray-50 transition ${open ? "rounded-b-none border-b-0" : ""
                    }`}
            >
                <span className="truncate">{selected}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <path
                        fill="currentColor"
                        d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                    />
                </svg>
            </div>

            {open && (
                <div
                    onMouseLeave={() => setOpen(false)}
                    className="absolute top-full left-0 w-[180px] bg-white border-x border-b border-gray-600 rounded-b-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                >
                    <ul className="text-sm text-gray-700">
                        {["Tùy chọn 1", "Tùy chọn 2", "Tùy chọn 3"].map((opt, i) => (
                            <li
                                key={i}
                                onClick={() => onSelect(opt)}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default FilterDefault
