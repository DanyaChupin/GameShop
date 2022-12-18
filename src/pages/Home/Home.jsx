import React from 'react'
import styles from './Home.module.scss'
import { GAMES } from '../../data/data'
import GameItem from '../../components/GameItem/GameItem'
import { Redirect } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {GAMES.map(game => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  )
}

export default HomePage
