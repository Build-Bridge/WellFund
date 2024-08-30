"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
 const router = useRouter();


    const navigate = () => {
        router.push("dashboard")
    };

    return (
        <div className="flex flex-col items-center">
            <h1>Landing Page</h1>
            <Button onClick={navigate}>Proceed to dashboard</Button>
        </div>
    )
};