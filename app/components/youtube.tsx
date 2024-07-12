"use client";

import ReactPlayer from "react-player";

export default function Youtube({ value }: { value: { url: string }, isInline: boolean }) {
    return <ReactPlayer url={value.url} width="100%" />;
}