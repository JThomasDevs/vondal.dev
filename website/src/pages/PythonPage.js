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
                This project was a great learning experience for me as it provided me with exposure to creating an intuitive and interactive user interface. Additionally, this project presented me with several challenges that I had to overcome in order to create the desired functionality. 
                <br />
                <br />
                In the process of overcoming these challenges, I learned a lot about object-oriented programming, uninque coding patterns, unconventional use of data structures, and the importance of using function templates to create reusable code.
            </p>
        </div>
        <BusinessContact />
        </>
    );
}