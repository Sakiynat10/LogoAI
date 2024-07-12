"use client";

import React, { Fragment, useState } from "react";
import "./style.scss";

const AccordionItem = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);

  };
  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen2(false);
    setIsOpen1(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleOpen4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen1(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };
  const toggleOpen5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen1(false);
    setIsOpen6(false);
  };
  const toggleOpen6 = () => {
    setIsOpen6(!isOpen6);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen1(false);
  };

  return (
    <Fragment>
      <div className="accordion-items-left">
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen1}>
            <span className={isOpen1 ? "minus" : "plus"}>
              {isOpen1 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          
            <div className={isOpen1 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen2}>
            <span className={isOpen2 ? "minus" : "plus"}>
              {isOpen2 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          <div className={isOpen2 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen3}>
            <span className={isOpen3 ? "minus" : "plus"}>
              {isOpen3 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          <div className={isOpen3 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        </div>
      </div>
      <div className="accordion-items-right">
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen4}>
            <span className={isOpen4 ? "minus" : "plus"}>
              {isOpen4 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          <div className={isOpen4 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen5}>
            <span className={isOpen5 ? "minus" : "plus"}>
              {isOpen5 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          <div className={isOpen5 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOpen6}>
            <span className={isOpen6 ? "minus" : "plus"}>
              {isOpen6 ? "-" : "+"}
            </span>
            <h3>'How much type of truck your company?'</h3>
          </div>
          <div className={isOpen6 ? "accordion-content" : "hide-content"}>
              "1.We are offering the 5 types of delivery trucks. You can choose
              the truck which suits. How much type of truck your company"
            </div>
        </div>
      </div>
    </Fragment>
  );
};

// const items = [
//     {
//         title: ,
//         content:
//     },
//     {
//         title: 'How much type of truck your company?',
//         content: '2.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
//     },
//     {
//         title: 'How much type of truck your company?',
//         content: '3.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
//     },
//     {
//         title: 'How much type of truck your company?',
//         content: '4.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
//     },
//     {
//         title: 'How much type of truck your company?',
//         content: '5.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
//     },
//     {
//         title: 'How much type of truck your company?',
//         content: '6.We are offering the 5 types of delivery trucks. You can choose the truck which suits. How much type of truck your company'
//     }
// ];

const AccordionSection = () => {
  return (
    <div className="container">
      <h1>
        У вас есть вопрос?<span>?</span>
      </h1>
      <div className="accordion">
        {/* {items?.map((item , index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))} */}
        <AccordionItem />
      </div>
    </div>
  );
};

export default AccordionSection;
