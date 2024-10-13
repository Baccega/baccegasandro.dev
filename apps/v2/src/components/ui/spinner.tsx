"use client"

import { LoaderCircle } from "lucide-react"

export function Spinner() {

    return (<LoaderCircle size={50} strokeWidth={2.25} className="text-white animate-spin" />)
}