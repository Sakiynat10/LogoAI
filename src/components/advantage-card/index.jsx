import React from 'react'

const AdvantageCard = ({src , h1 , p}) => {
  return (
    <div className='advantage-card'>
        <img src={`${src}`} alt={h1} />
        <h2>{h1}</h2>
        <p>{p}</p>
    </div>
  )
}

export default AdvantageCard