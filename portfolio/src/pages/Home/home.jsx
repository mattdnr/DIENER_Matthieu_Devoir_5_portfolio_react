import React from "react";
import AppHero from "./components/hero";
import AppAbout from "./components/about";

export default function Home() {
    return (
        <div>
            <AppHero/>
            <AppAbout/>
        </div>
    )
}