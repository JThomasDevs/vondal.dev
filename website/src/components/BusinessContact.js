import PaddingListener from "./PaddingListener";
import ScrollDown from "./ScrollDown";
import { useEffect, useState } from 'react';

export default function BusinessContact() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollElements = document.querySelectorAll('.scroll');
            const contactElement = document.getElementById('contact');
            scrollElements.forEach((scrollElement) => {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-10 || window.innerWidth < 523) {
                    /*
                    * -10 is to account for the pixels of space before the BusinessContact component begins to cover the body text.
                    *
                    * 523px is the width at which the ScrollDown component began to distort.
                    */
                    scrollElement.classList.add('hide-scroll');
                    contactElement.classList.remove('space-x-44')
                } else {
                    scrollElement.classList.remove('hide-scroll');
                    contactElement.classList.add('space-x-44')
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    });

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="flex bg-black inset-x-0 text-center justify-center text-sm fixed bottom-0 z-50 pb-3 pt-3 space-x-44" id="contact">
        <ScrollDown />
        <div>
            { /* 607px is the width at which the text formatting for this element began to look wonky */}
            {
            windowWidth > 607 ? 
            <>Business Inquiry? <a href="mailto:contact@vondal.dev" className="text-link hover:underline">Contact Me</a></> :
            <>Business Inquiry?<br />
            <a href="mailto:contact@vondal.dev" className="text-link hover:underline">Contact Me</a></>
            }
        </div>
        <ScrollDown />
        <PaddingListener /> { /* This is a component that I created to dynamically resize the padding on the bottom of the body text to match the height of the BusinessContact component which can vary with screen size. */ }
        </div>
    );
}
