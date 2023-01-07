import React from 'react'

import { ImSearch } from 'react-icons/im'
import styles from './SerchInput.module.scss'
const SerchInput = ({ onChangeSearchInput, rightGame }) => {
  return (
    <div className={styles.serchInput}>
      <div className={styles.serchInput__Wrapper}>
        <input
          type="text"
          placeholder="Поиск..."
          value={rightGame}
          className={styles.serchInput__input}
          onChange={onChangeSearchInput}
        />
        <ImSearch />
      </div>
    </div>
  )
}

export default SerchInput
