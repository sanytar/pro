import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newUser } from '../../redux/actions/cats.action'
import { useNavigate } from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [password, setPass] = useState('')
  const [email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(newUser({ password, email }))
    navigate('/')
  }

  return (
    <form className='m-3' onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPass(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  )
}

export default Register
