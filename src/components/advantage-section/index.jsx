import { advantages } from '@/data'
import React from 'react'
import AdvantageCard from '../advantage-card'
import "./style.scss"

const AdvantageSection = (
  {advantages}
) => {
  return (
  <div className="container">
    <h1>Наши преимущества</h1>
    <div className="advantage-cards">
    {advantages.map((el) => <AdvantageCard {...el} />)}
    </div>
  </div>
  )
}

export default AdvantageSection