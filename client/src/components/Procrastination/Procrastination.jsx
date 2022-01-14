import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCat, addDog, allBlack } from '../../redux/actions/cats.action'
import { addBlackList } from '../../redux/actions/cats.action'

function Procrastination() {
  const [choice, setChoice] = useState('Кошечки')
  const [currentImage, setCurrentImage] = useState('')
  const [next, setNext] = useState(false)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allBlack())
  }, [])

  const blacklist = useSelector(state => state.blacklist)

  useEffect(() => {
    if (choice === 'Кошечки') {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          if (blacklist.some(el => el.image === data[0].url)) {
            setNext(!next)
          } else {
            setCurrentImage(data[0].url)
          }
        })
    } else {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setCurrentImage(data.message))
    }
  }, [choice, next])

  function toggle(text) {
    setChoice(text)
  }



  function addFavorite() {
    if (choice === 'Кошечки') {
      dispatch(addCat({ animal: choice, image: currentImage }))

    } else {
      dispatch(addDog({ animal: choice, image: currentImage }))
    }
    setNext(!next)
  }

  function addBlacklist() {
    dispatch(addBlackList({ image: currentImage }))
    setNext(!next)
  }

  return (

    <div className={style.proContainer}>
      <div className={style.btnContainer}>
        <button type="button" className={choice === 'Кошечки' ? "btn btn-primary me-5" : "btn btn-secondary me-5"} onClick={(e) => toggle(e.target.innerText)}>Кошечки</button>
        <button type="button" className={choice === 'Собачки' ? "btn btn-primary me-5" : "btn btn-secondary me-5"} onClick={(e) => toggle(e.target.innerText)}>Собачки</button>
      </div>
      <div className={style.frame}>
        <img src={currentImage} alt="" className={style.image} />
      </div>
      <div className={style.btnContainer}>
        <button type="button" className="btn btn-success me-3" onClick={addFavorite}>Нравится!</button>
        <button type="button" className="btn btn-secondary me-3" onClick={() => setNext(!next)}>Нейтрально</button>
        <button type="button" className="btn btn-danger me-3" onClick={addBlacklist}>Не нравится!</button>
      </div>
    </div>

  )
}

export default Procrastination
