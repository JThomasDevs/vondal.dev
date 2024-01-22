import PaddingListener from "./PaddingListener";
import ScrollDown from "./ScrollDown";
import { useEffect, useState } from 'react';

export default function BusinessContact() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollElements = document.querySelectorAll('.scroll');
            scrollElements.forEach((scrollElement) => {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-5) {
                    /*
                    * -5 is to account for the pixels of space before the BusinessContact component begins to cover any body text.
                    */
                    scrollElement.classList.add('hide-scroll');
                } else {
                    scrollElement.classList.remove('hide-scroll');
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
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            const contactElement = document.getElementById('contact');
            if (window.innerWidth < 650) {
                contactElement.classList.remove('space-x-44');
                contactElement.classList.add('space-x-20');
            } else {
                contactElement.classList.remove('space-x-20');
                contactElement.classList.add('space-x-44');
            }

            const scrollElements = document.querySelectorAll('.scroll');
            scrollElements.forEach((scrollElement) => {
                if (window.innerWidth < 650) {
                    scrollElement.classList.add('top-2.5');
                } else {
                    scrollElement.classList.remove('top-2.5');
                }
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="flex bg-black inset-x-0 text-center justify-center text-sm fixed bottom-0 z-50 pb-3 pt-3 space-x-44" id="contact">
        <ScrollDown />
        <div>
            {
            windowWidth > 650 ? 
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
