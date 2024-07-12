import {auth, signOut} from "@/auth";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default async function Account() {
    const session = await auth();

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center space-y-4">
                <Image
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                    className="rounded-full w-32 h-32"
                    width={128}
                    height={128}
                />
                <h1 className="text-4xl font-bold">{session?.user?.name || "Sign In"}</h1>
                <p className="text-lg text-gray-500">{session?.user?.email || "Sign in to view your account"}</p>

                <Button
                    onClick={async () => {
                        "use server";
                        await signOut();
                    }}
                    className="px-4 py-2 bg-primary text-white rounded-md shadow-md transition transform hover:scale-105"
                >
                    Sign Out
                </Button>
            </div>
        </div>
    );
}