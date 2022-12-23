import React from 'react'
import styles from './ProfilePage.module.scss'
import Button from '../../components/Button/Button'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../../redux/auth/reducer'
import { cleanAllCart } from '../../redux/cart/reducer'
const ProfilePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, email } = useAuth()
  const signOut = () => {
    dispatch(removeUser())
    dispatch(cleanAllCart())
    navigate('/')
  }
  return isAuth ? (
    <div>
      <h1>Профиль</h1>
      <div className={styles.profile__info}>
        <div className={styles.profile__email}>
          <p>Email - {email}</p>
        </div>
      </div>
      <Button onClick={signOut}> Выйти из аккаунта</Button>
    </div>
  ) : (
    <div>
      <h1>Вы не авторизированы</h1>
      <Link to={'/'}> -{'>'} Авторизация</Link>
    </div>
  )
}

export default ProfilePage
