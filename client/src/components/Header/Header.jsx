import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/actions/cats.action'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Домашняя</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pro">Прокрастинировать!</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Мои картинки</Link>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default Header
