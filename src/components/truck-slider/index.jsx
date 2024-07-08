"use client"

import React, { useState } from 'react'
import "./style.scss";
import { unstable_HistoryRouter } from 'react-router-dom';

const Slider = () => {
  const [value , setValue] = useState()
  const [value1 , setValue1] = useState()

  const getRangeValue = (e) => {
    setValue(value1 | +e?.target?.value)
    console.log(value);
    setValue1(value)
  }
  const getImageValue1 = () => {
    setValue1(2)
  }
  const getImageValue2 = () => {
    setValue1(7)
  }
  const getImageValue3 = () => {
    setValue1(12)
  }
  const getImageValue4 = () => {
    setValue1(20)
  }
  return (
    <div className='range-slider'>
      <input onChange={getRangeValue} value1={value1} onMouseMove={getRangeValue} className={(value1 < 5 ? "range-5 range" : (value1 < 10 ? "range-10 range" : (value1 < 15 ? "range-15 range" : "range-20 range")))} type="range" disabled defaultValue={value1} min={0} max={20} />
      <div class="range-labels">
            <p>5</p>
            <p>10</p>
            <p>15</p>
            <p>Более 20</p>
      </div>
      <div className="range-images">
        <div className={(value1 < 5 ? "active card" : (value1 < 10 ? "card" : (value1 < 15 ? "card" : "card")))}>
          <img  onClick={getImageValue1} src="/truck-1.png" alt="truck-1" />
          <p>Пятитонники</p>
        </div>
        <div className={(value1 < 5 ? "card" : (value1 < 10 ? "active card" : (value1 < 15 ? "card" : "card")))}>
          <img  onClick={getImageValue2} src="/hero-truck.png" alt="hero-truck" />
          <p>десятьтонн</p>
        </div>
        <div className={(value1 < 5 ? "card" : (value1 < 10 ? "card" : (value1 < 15 ? "active card" : "card")))}>
          <img  onClick={getImageValue3} src="/truck-1.png" alt="truck-1" />
          <p>пятнадцатьтонн</p>
        </div>
        <div className={(value1 < 5 ? "card" : (value1 < 10 ? "card" : (value1 < 15 ? "card" : "active card")))}>
          <img  onClick={getImageValue4} src="/hero-truck.png" alt="truck-1" />
          <p>двадцатьтонн</p>
        </div>
      </div>
      <img className='range-main-img' width={"200px"} src={(value1 < 5 ? "/truck-1.png" : (value1 < 10 ? "/hero-truck.png" : (value1 < 15 ? "/truck-1.png" : "/hero-truck.png")))} alt="truck" />
      <p>{value}</p>
    </div>
  )
}

export default Slider