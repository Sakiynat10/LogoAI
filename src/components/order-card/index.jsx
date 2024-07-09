import React from 'react'

const OrderCard = ({h1 , p , src}) => {
  return (
    <div className='order-card'>
        <h1>{h1}</h1>
        <p>{p}</p>
        <img src={`${src}`} alt={h1} />
    </div>
  )
}

export default OrderCard