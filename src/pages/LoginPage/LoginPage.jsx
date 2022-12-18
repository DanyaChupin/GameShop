import React from 'react'
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/Form'
import Login from '../../components/Login/Login'

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login title="Login" />
      <p>
        Если у вас нет аккаунта прейдите на
        <Link to={'/registration'}> Регистрация</Link>
      </p>
    </div>
  )
}

export default LoginPage
