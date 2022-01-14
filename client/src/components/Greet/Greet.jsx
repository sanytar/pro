import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'

function Greet() {

  const user = useSelector(state => state.user)
  console.log(user);
  return (
    <div className={style.greetContainer}>
      <h1>Приветствую тебя {user ? user.email : null} в самой лучшей программе для прокрастинаторов!</h1>
      <p>Осмотрись и воспользуйся функционалом, дай возможность себе немного отдохнуть!</p>
    </div>
  )
}

export default Greet
