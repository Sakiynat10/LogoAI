"use client";

import React, { Fragment, useEffect, useState } from "react";

import "./style.scss";

const Counter = ({day , employee , totalOrder}) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const maxCount1 = day;
  const maxCount2 = employee;
  const maxCount3 = totalOrder;

  useEffect(() => {
    if (counter1 < maxCount1) {
      const timer = setTimeout(() => {
        setCounter1(counter1 + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [counter1]);

  useEffect(() => {
    if (counter2 < maxCount2) {
      const timer = setTimeout(() => {
        setCounter2(counter2 + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [counter2]);

  useEffect(() => {
    if (counter3 < maxCount3) {
      const timer = setTimeout(() => {
        setCounter3(counter3 + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [counter3]);
  return (
    <Fragment>
      <div className="right-top">
        <div className="top-card">
          <h1>{counter1}+</h1>
          <p>заказов в день</p>
        </div>
        <div className="top-card">
          <h1>{counter2}</h1>
          <p>Сотрудников</p>
        </div>
        <div className="top-card">
          <h1>{counter3}</h1>
          <p>заказов в 2022 году</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
