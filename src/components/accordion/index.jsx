"use client"

import React, { useState } from 'react';
import "./style.scss";

const AccordionItem = ({title , content}) => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleOpen}>
                <span className={isOpen ? "minus" : "plus"}>{isOpen ? '-' : '+'}</span>
                <h3>{title}</h3>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    )
}

const items = [
    {
        title:'How much type of truck your company?' , 
        content:"We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company"
    },
    {
        title: 'How much type of truck your company?',
        content: 'We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: 'We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: 'We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    }
];

const Accordion = () => {
    return(
        <div className="accordion">
            {items?.map((item , index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    )
}

export default Accordion