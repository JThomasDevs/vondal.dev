import BusinessContact from "../components/BusinessContact";

export default function HomePage() {
    return (
        <div className="bg-black font-mono text-center flex-col items-center justify-center scale-100">
            <h1 className="text-header-text font-semibold pt-6 pb-2">
                {'{ Vondal }'}
            </h1>
            <h2 className="text-content-text break-words leading-7 flex-col text-center pl-10vw pr-10vw pt-0 pb-8">
                I am a 27-year-old full stack software engineer currently earning my degree in CS.
            </h2>
            <p className="text-content-text break-words leading-7 flex-col text-center pl-10vw pr-10vw pt-8 pb-4">
                <div className="pb-6">
                    This website was created using&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://react.dev/" className="text-react hover:underline">React</a>,&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className="text-tailwind hover:underline">TailwindCSS</a>, and&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://firebase.google.com/" className="text-firebase hover:underline">Firebase</a>.
                </div>
                <div>
                    Explore my <a href="https://github.com/JThomasDevs" target="_blank" rel="noreferrer" className="text-github hover:underline">GitHub</a> repositories to see examples of my work in <a href="/python" target="_self" className="text-python hover:underline hover:animate-pulse">Python</a>,&nbsp;
                    <a href="/cpp" target="_self" className="text-cpp hover:underline hover:animate-pulse">C++</a>,&nbsp;
                    <a href="/rust" target="_self" className="text-rust hover:underline hover:animate-pulse">Rust</a>, and&nbsp;
                    <a href="/java" target="_self" className="text-java hover:underline hover:animate-pulse">Java</a>.
                </div>
            </p>
            <BusinessContact />
        </div>
    );
}