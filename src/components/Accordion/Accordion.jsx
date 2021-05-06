import React, { useState, useRef } from 'react';
import Chevron from './Chevron';
import './Accordion.css';

function Accordion(props) {

    const [active, setActive] = useState('');
    const [showHeight, setShowHeight] = useState('0px');
    const [rotate, setRotate] = useState('accordion__icon');

    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(active === '' ? 'active' : '');
        setShowHeight(
            active === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        setRotate (
            active === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
        );
    }

    return (
        <div className="accordion__section">
            <div className={`accordion ${active}`} onClick={toggleAccordion}>
                <h3 className="accordion__title">{props.title}</h3>
                <Chevron className={`${rotate}`} width={10} fill={"#333"} />
            </div>
            <div ref={content} style={{ maxHeight: `${showHeight}` }} className="accordion__content">
                <p className="accordion__text">{props.text}</p>
            </div>
        </div>
    );
}

export default Accordion;
