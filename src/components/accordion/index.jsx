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
        content:"1.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company"
    },
    {
        title: 'How much type of truck your company?',
        content: '2.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: '3.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: '4.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: '5.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    },
    {
        title: 'How much type of truck your company?',
        content: '6.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
    }
];

const AccordionSection = () => {
    return(
        <div className="container">
        <h1>
          У вас есть вопрос?<span>?</span>
        </h1>
        <div className="accordion">
            {items?.map((item , index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
      </div>
    )
}

export default AccordionSection;