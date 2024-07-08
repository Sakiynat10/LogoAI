import { Cardo } from 'next/font/google'
import React from 'react'

import "./style.scss"

const DeliverCards = () => {
  return (
    <div className='deliver-cards'>
        <div className="deliver-card">
            <img src="/deliver-product-1.svg" alt="deliver-1" />
            <h3>Режимные (температурные)</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-2.svg" alt="deliver-2" />
            <h3>Продукты питания</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-3.svg" alt="deliver-3" />
            <h3>Крупногабаритные и тяжеловесные грузы</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-7.svg" alt="deliver-4" />
            <h3>Металлоконструкции и ЖБИ</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-4.svg" alt="deliver-5" />
            <h3>Медикаменты</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-5.svg" alt="deliver-6" />
            <h3>Оборудование и запчасти</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
        <div className="deliver-card">
            <img src="/deliver-product-6.svg" alt="deliver-7" />
            <h3>Товары народного потребления</h3>
            <p>Найдите надежного перевозчика для доставки Steel and concrete products по Украине</p>         
        </div>
    </div>
  )
}

export default DeliverCards