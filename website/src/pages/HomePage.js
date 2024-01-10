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
    }, []);

    function calculateAge() {
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return ageInYears.toFixed(9);
    }

    return (
        <div className="bg-black font-mono text-center flex-col items-center justify-center scale-100">
            <h1 className="text-header-text font-semibold pt-8 pb-2">
                {'{ Vondal }'}
            </h1>
            <h2 className="text-content-text tracking-tighter leading-6 flex-col text-left body-text pt-20 pb-8">
                I am a {age} year old full stack software engineer currently earning my degree in CS.
            </h2>
            <p className="text-content-text tracking-tighter leading-6 flex-col text-left body-text pb-4">
                <div className="pb-6">
                    This website was created using <a target="_blank" rel="noreferrer" href="https://react.dev/" className="text-react hover:underline">React</a>, <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className="text-tailwind hover:underline">TailwindCSS</a>, and <a target="_blank" rel="noreferrer" href="https://firebase.google.com/" className="text-firebase hover:underline">Firebase</a>.
                </div>
                <div>
                    Explore my <a href="https://github.com/JThomasDevs" target="_blank" rel="noreferrer" className="text-github hover:underline">GitHub</a> to see examples of my work in <a href="/python" target="_self" className="text-python hover:underline hover:animate-pulse">Python</a>, <a href="/cpp" target="_self" className="text-cpp hover:underline hover:animate-pulse">C++</a>, <a href="/rust" target="_self" className="text-rust hover:underline hover:animate-pulse">Rust</a>, and <a href="/java" target="_self" className="text-java hover:underline hover:animate-pulse">Java</a>.
                </div>
            </p>
            <br/>
            <BusinessContact />
        </div>
    );
}