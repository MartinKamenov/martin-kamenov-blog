import React from 'react';

import './Content.css';

const Content = ({ content }) => {
    const getContentElement = (element) => {
        switch(element.type) {
            case 'h1':
                return <h1 className='content-element header-element'>{element.text}</h1>;
            case 'h2':
                return <h2 className='content-element header-element'>{element.text}</h2>;
            case 'h3':
                return <h3 className='content-element header-element'>{element.text}</h3>;
            case 'h4':
                return <h4 className='content-element header-element'>{element.text}</h4>;
            case 'h5':
                return <h5 className='content-element header-element'>{element.text}</h5>;
            case 'h6':
                return <h6 className='content-element header-element'>{element.text}</h6>;
            case 'p':
                return <p className='content-element paragraph-element'>{element.text}</p>;
            case 'img':
                return <img
                className='generic-image'
                src={element.src}
                alt={element.alt || 'Element image'}></img>;
            default:
                return <p className='content-element'>{element.text}</p>;
        }
    };

    const splitContent = (content) => {
        let parsedContent = JSON.parse(content);

        const elements = parsedContent.content;
        return elements.map((element) => getContentElement(element));
    };

    return (
        <div className='content'>
            {
                splitContent(content)
            }
        </div>
    );
};
 
export default Content;