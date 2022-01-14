import React from 'react'

function Login() {
  return (
    <form className='m-3'>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>
  )
}

export default Login
