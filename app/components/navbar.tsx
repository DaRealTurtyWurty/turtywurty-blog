import Link from "next/link";
import {ThemeToggle} from "@/app/components/theme-toggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <div>
                <Link href="/" className="text-3xl font-bold">TurtyWurty's <span className="text-primary">Blog</span></Link>
            </div>
            <div>
                <ThemeToggle/>
            </div>
        </nav>
    );
}