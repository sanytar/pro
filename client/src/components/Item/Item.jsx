import React from 'react'
import style from './style.module.css'

function Item({ image, animal }) {
  return (
    <div className=''>
      <img src={image} alt="" className={style.card} />
      <p>Тип животного - {animal}</p>
    </div>
  )
}

export default Item
