"use client";

import { useEffect, useState } from "react";

export default function Hello() {
    const [resultFromRouteHandler, setResultFromRouteHandler] = useState("");

    useEffect(() => {
        const getResult = async () => {
            const res = await fetch("/api/hello");
            const data = await res.json();
            setResultFromRouteHandler(data.message);
        }

        getResult();
    }, []);

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Hello from client component</p>
            <p>Result from route handler: {resultFromRouteHandler}</p>
        </div>
    )
}