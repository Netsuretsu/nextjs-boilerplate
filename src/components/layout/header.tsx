import { ModeToggle } from "@/components/theme/theme-mode-toggle"

export function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 border-b border-accent">
            <span>X App</span>
            <div className="flex-1"></div>
            <ModeToggle />
        </header>
    )
}