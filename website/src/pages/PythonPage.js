import HomeButton  from "../components/HomeButton";
import BusinessContact from "../components/BusinessContact";

export default function PythonPage() {
    return (
        <div className="bg-black font-mono text-center flex-col items-center justify-center scale-100">
            <h1 className="text-python text-header-text font-semibold pt-6 pb-2">
                {'{'}&nbsp;<a href="https://www.python.org" target="_blank" rel="noreferrer" className="hover:underline">Python</a>&nbsp;{'}'}
            </h1>
            <HomeButton />
            <p className="text-content-text break-words leading-7 flex-col text-center pl-10vw pr-10vw pt-8 pb-4">
                <span className="text-python">Python</span> is the first programming language I learned and is the language that I have worked with the most.
                <br />
                <br />
                The language also launched my exploration into the realm of web automation using libraries like <a href="https://selenium-python.readthedocs.io/" target="_blank" rel="noreferrer" className="text-selenium hover:underline">Selenium</a> to automate complex tasks across several different web pages.
                <br />
                <br />
                The project that I am most proud of is my <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" rel="noreferrer" className="text-tkinter hover:underline">Tkinter</a> <a href="https://github.com/JThomasDevs/Tkinter-Interactive-GUI-Demo" target="_blank" rel="noreferrer" className= "text-python hover:underline">Interactive GUI.</a>
                <br />
                <br />
                Tkinter does not have built-in controls to dynamically resize GUI elements as the window resizes. I wrote a function template that can be applied to any GUI element to dynamically resize it as the window resizes. Element-to-window and element-to-element ratios are maintained all the way down to the minimum window size.
                <br />
                <br />
                Additionally, this project serves as a demonstration of my early GUI design style along with custom image buttons and a few other fun features that I added.
            </p>
            <BusinessContact />
        </div>
    );
}