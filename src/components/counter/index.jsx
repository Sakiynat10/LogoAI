"use client";

import React, { Fragment, useEffect, useState } from "react";

import "./style.scss";

const Counter = ({count}) => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const maxCount1 = count;
  useEffect(() => {
    if (counter < maxCount1) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 1);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  useEffect(() => {
    if (counter1 < maxCount1) {
      const timer = setTimeout(() => {
        setCounter1(counter1 + 1);
      }, 2);
      return () => clearTimeout(timer);
    }
  }, [counter1]);

  useEffect(() => {
    if (counter2 < maxCount1) {
      const timer = setTimeout(() => {
        setCounter2(counter2 + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [counter2]);

  useEffect(() => {
    if (counter3 < maxCount1) {
      const timer = setTimeout(() => {
        setCounter3(counter3 + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [counter3]);
  return (
    <Fragment>
      <h1>{maxCount1 >= 1500  ? counter : ""}</h1>
      <h1>{1500 > maxCount1 && maxCount1 > 500  ? counter1 : ""}</h1>
      <h1>{500 >= maxCount1 && maxCount1 <= 60   ? counter2 : ""}</h1>
      <h1>{60 > maxCount1 && maxCount1 <= 0 ? counter3 : ""}</h1>
    </Fragment>
  );
};

export default Counter;
