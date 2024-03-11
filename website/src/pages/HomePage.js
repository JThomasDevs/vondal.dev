import React from "react";
import BusinessContact from "../components/BusinessContact";
import { useState, useEffect } from "react";

export default function HomePage() {
    const birthDate = new Date('1995-12-09T15:00:00-06:00');

    const [age, setAge] = useState(calculateAge(birthDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setAge(calculateAge(birthDate));
        }, 50); // Update every 50ms

        return () => clearInterval(interval);
    });
    // I chose 9 decimal places and 50ms update time because that is what is used on https://ottomated.net for the age counter and I liked the way it looked.

    function calculateAge() {
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return ageInYears.toFixed(9);
    }

    return (
        <>
        <div className="bg-black font-mono text-center flex-col">
            <h1 className="text-header-text font-semibold pt-8 pb-2">
                {'{ Vondal }'}
            </h1>
            <h2 className="text-content-text text-left body-text pt-20">
                I am a {age} year old software engineer currently earning my degree in CS.
            </h2>
            <p className="text-content-text text-left body-text">
                <div className="pb-6">
                    I am currently learning about <a href="https://en.wikipedia.org/wiki/User_interface_design" target="_blank" rel="noreferrer" className="text-rust hover:underline">UI</a>/<a href="https://en.wikipedia.org/wiki/User_experience_design" target="_blank" rel="noreferrer" className="text-htmlcssjs hover:underline">UX</a> Design and <a href="https://en.wikipedia.org/wiki/Computer_graphics_(computer_science)" target="_blank" rel="noreferrer" className="text-selenium hover:underline">Computer Graphics and Visualization</a>.
                </div>
                <div>
                    Explore my <a href="https://github.com/JThomasDevs" target="_blank" rel="noreferrer" className="text-github hover:underline">GitHub</a> to see examples of my work in <a href="/python" target="_self" className="text-python hover:underline hover:animate-pulse">Python</a> and <a href='/other' target='_self' className="text-other hover:underline hover:animate-pulse">other</a> languages.
                </div>
            </p>
        </div>
        <BusinessContact />
        </>
    );
}