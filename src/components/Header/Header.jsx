import React from 'react'
import { Link } from 'react-router-dom'

import CartBlock from '../CartBlock/CartBlock'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.header__title}>
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
