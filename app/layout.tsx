import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/components/theme-provider";
import Navbar from "@/app/components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TurtyWurty's Blog",
    description: "A blog by TurtyWurty"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />
            <main className="flex flex-col max-w-2xl mx-auto px-4">
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    );
}
