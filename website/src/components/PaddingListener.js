import { useEffect } from 'react';

const PaddingListener = () => {
    useEffect(() => {
        const handleResize = () => {
            const contactElement = document.getElementById('contact');
            const contactHeight = contactElement.offsetHeight;
            const bodyTextElements = document.querySelector('.body-text');

            bodyTextElements.style.paddingBottom = contactHeight + 'px';
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return null;
};

export default PaddingListener;
