import React from 'react';

import './Content.css';

const Content = ({ content }) => {
    const getContentElement = (element, key) => {
        switch(element.type) {
            case 'h1':
                return <h1 key={key} className='content-element header-element'>{element.text}</h1>;
            case 'h2':
                return <h2 key={key} className='content-element header-element'>{element.text}</h2>;
            case 'h3':
                return <h3 key={key} className='content-element header-element'>{element.text}</h3>;
            case 'h4':
                return <h4 key={key} className='content-element header-element'>{element.text}</h4>;
            case 'h5':
                return <h5 key={key} className='content-element header-element'>{element.text}</h5>;
            case 'h6':
                return <h6 key={key} className='content-element header-element'>{element.text}</h6>;
            case 'p':
                return <p key={key} className='content-element paragraph-element'>{element.text}</p>;
            case 'code':
                return <div key={key} className='content-element code-element'>{element.text}</div>;
            case 'link':
                return <a href={element.src} key={key} className='content-element link-element'>{element.link}</a>;
            case 'img':
                return <img
                key={key}
                className='generic-image'
                src={element.src}
                alt={element.alt || 'Element image'}></img>;
            default:
                return <p key={key} className='content-element'>{element.text}</p>;
        }
    };

    const splitContent = (content) => {
        let parsedContent = JSON.parse(content);

        const elements = parsedContent.content;
        return elements.map((element, i) => getContentElement(element, i));
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