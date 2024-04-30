import HomeButton  from "../components/HomeButton";
import BusinessContact from "../components/BusinessContact";
import Helmet from "react-helmet";

export default function PythonPage() {
    return (
        <>
        <Helmet>
            <title>{ '{ Python }' }</title>
        </Helmet>
        <div className="bg-black font-mono text-center">
            <h1 className="text-python text-header-text font-semibold pt-6 pb-2">
                {'{'}&nbsp;<a href="https://www.python.org" target="_blank" rel="external noreferrer" className="hover:underline">Python</a>&nbsp;{'}'}
            </h1>
            <HomeButton />
            <p className="text-content-text text-left body-text pt-8">
                <span className="text-python">Python</span> is the first programming language I learned and is the language that I have worked with the most.
                <br />
                <br />
                The language also launched my exploration into the realm of web automation using libraries like <a href="https://selenium-python.readthedocs.io/" target="_blank" rel="external noreferrer" className="text-selenium hover:underline">Selenium</a> to automate complex tasks across several different web pages.
                <br />
                <br />
                The project that I am most proud of is my <a href="https://github.com/JThomasDevs/Tkinter-Interactive-GUI-Demo" target="_blank" rel="external noreferrer" className= "text-python hover:underline">Dynamic GUI</a> built with <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" rel="external noreferrer" className="text-tkinter hover:underline">Tkinter</a>.
                <br />
                <br />
                Tkinter does not have built-in controls to dynamically resize GUI elements as the window resizes. I wrote a function template that can be applied to any GUI element to dynamically resize the element as the window resizes. Element-to-window and element-to-element ratios are maintained all the way down to the minimum window size.
                <br />
                <br />
                Additionally, this project serves as a demonstration of my early GUI design style along with custom image buttons and a few other fun features that I added.
            </p>
        </div>
        <BusinessContact />
        </>
    );
}