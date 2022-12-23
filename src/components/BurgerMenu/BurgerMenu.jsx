import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

import AppContext from '../context/context'
import SideBar from '../SideBar/SideBar'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const [burgerToggle, setBurgerToggle] = useState(false)

  return (
    <AppContext.Provider value={{ setBurgerToggle }}>
      <SideBar
        toggleBurger={() => setBurgerToggle(false)}
        opened={burgerToggle}
      />
      <div className={styles.burgerMenu} onClick={() => setBurgerToggle(true)}>
        {burgerToggle ? (
          <AiOutlineMenuFold size={30} className={styles.burgerMenu__icon} />
        ) : (
          <AiOutlineMenuUnfold size={30} className={styles.burgerMenu__icon} />
        )}
      </div>
    </AppContext.Provider>
  )
}

export default BurgerMenu
