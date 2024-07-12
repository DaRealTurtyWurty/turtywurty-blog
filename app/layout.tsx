import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/components/theme-provider";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
            <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
                <Navbar/>
                <main className="flex flex-col max-w-2xl mx-auto px-4">
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
