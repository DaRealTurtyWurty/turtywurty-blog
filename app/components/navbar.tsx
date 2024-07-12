import Link from "next/link";
import {ThemeToggle} from "@/app/components/theme-toggle";
import SignInButton from "@/app/components/signin";
import {auth} from "@/auth";
import Image from "next/image";

export default async function Navbar() {
    const session = await auth();

    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <div>
                <Link href="/" className="text-3xl font-bold">TurtyWurty&apos;s <span
                    className="text-primary">Blog</span></Link>
            </div>
            <div className="flex items-center space-x-4">
                {
                    !session?.user ?
                        <SignInButton/> :
                        <Link href="/account" className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                            <Image
                                src={session?.user?.image || ""}
                                alt={session?.user?.name || ""}
                                width={40}
                                height={40}
                                className="rounded-full cursor-pointer transition transform hover:scale-105 border-2 border-gray-800 dark:border-gray-300 border-opacity-50"
                            />
                            <span className="font-bold text-sm truncate text-ellipsis max-w-[10rem]">
                                {session?.user?.name}
                            </span>
                        </Link>
                }
                <ThemeToggle/>
            </div>
        </nav>
    );
}