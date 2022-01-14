import { ADD_CAT, GET_ALL_CATS, ADD_BLACK, GET_ALL_BLACK, ADD_DOG, GET_ALL_DOGS, DELETE_USER, SET_USER } from '../types'


export const addCat = (data) => (dispatch) => {
  fetch('http://localhost:3001/add', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: ADD_CAT,
      payload: data
    }))
}

export const addDog = (data) => (dispatch) => {
  fetch('http://localhost:3001/add', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: ADD_DOG,
      payload: data
    }))
}




export const addBlackList = (data) => (dispatch) => {
  fetch('http://localhost:3001/black', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: ADD_BLACK,
      payload: data
    }))
}

export const allBlack = () => (dispatch) => {
  fetch('http://localhost:3001/black')
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => dispatch({
      type: GET_ALL_BLACK,
      payload: data
    }))
}

export const getAll = () => (dispatch) => {
  fetch('http://localhost:3001/favorites')
    .then(res => res.json())
    .then(data => sliced(data))
  function sliced(data) {
    console.log(data);
    const cats = data.filter(el => el.animal === 'Кошечки')
    const dogs = data.filter(el => el.animal === 'Собачки')
    dispatch({
      type: GET_ALL_DOGS,
      payload: dogs
    })
    dispatch({
      type: GET_ALL_CATS,
      payload: cats
    })
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const newUser = (data) => (dispatch) => {
  console.log(data);
  fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(user => dispatch({
      type: SET_USER,
      payload: user
    }))
}

export const deleteUser = () => ({
  type: DELETE_USER,
  payload: null
})
