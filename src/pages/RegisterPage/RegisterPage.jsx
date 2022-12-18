import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../components/SignUp/SignUp'
import styles from './RegisterPage.module.scss'
const RegisterPage = () => {
  return (
    <div>
      <h1> Регистрация</h1>
      <SignUp />
      <p>
        Если у вас уже есть аккаунт перейдите на
        <Link to={'/'}> Авторизацию</Link>
      </p>
    </div>
  )
}

export default RegisterPage
