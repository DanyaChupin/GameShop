import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import CartBlock from '../CartBlock/CartBlock'
import styles from './Header.module.scss'

const Header = () => {
  const { isAuth } = useAuth()
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to={isAuth ? '/home' : '/'} className={styles.header__title}>
          GAME STORE
        </Link>
      </div>
      <div className={styles.header__basket}>
        <CartBlock />
      </div>
    </div>
  )
}

export default Header
