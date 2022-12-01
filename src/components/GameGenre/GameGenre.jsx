import React from 'react'
import styles from './GameGenre.module.scss'
const GameGenre = ({ genre }) => {
  return <span className={styles.gameGenre}>{genre}</span>
}

export default GameGenre
