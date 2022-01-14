import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../redux/actions/cats.action'
import Item from '../Item/Item'
import style from './style.module.css'

function Favorites() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll())
  }, [])



  const cats = useSelector(state => state.cats)
  const dogs = useSelector(state => state.dogs)

  return (
    <div className='animalContainer'>
      <div className={style.cats}>{cats.map(el => <Item key={el.id} {...el} />)}</div>
      <div className={style.dogs}>{dogs.map(el => <Item key={el.id} {...el} />)}</div>
    </div>
  )
}

export default Favorites
