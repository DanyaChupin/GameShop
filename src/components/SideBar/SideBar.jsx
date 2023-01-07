import React, { useState } from 'react'

import { FiX } from 'react-icons/fi'
import styles from './SideBar.module.scss'
import SideBarGenre from '../SideBarGenre/SideBarGenre'
const SideBar = ({ toggleBurger, opened }) => {
  const [rightGame, setRightGame] = useState('')
  return (
    <div
      className={`${styles.sideBar} ${opened ? '' : styles.sideBar__closed} `}
    >
      <h2 onClick={toggleBurger}>
        <FiX className={styles.sideBar__icon} size={50} />
      </h2>
      <h1 className={styles.sideBar__title}>Сортировать по:</h1>

      <SideBarGenre setRightGame={setRightGame} />
    </div>
  )
}

export default SideBar
