import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GameBuy from '../GameBuy/GameBuy'
import GameGenre from '../GameGenre/GameGenre'
import styles from './GameItem.module.scss'
import { setCurrentGames } from '../../redux/games/reducer'
import GameCover from '../GameCover/GameCover'

const GameItem = ({ game }) => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentGames(game))
    history(`/games/${game.title}`)
  }

  return (
    <div className={styles.gameItem} onClick={handleClick}>
      <GameCover image={game.image} />
      <div className={styles.gameItem__details}>
        <span className={styles.gameItem__title}>{game.title}</span>
        <div className={styles.gameItem__genre}>
          {game.genres.map(genre => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={styles.gameItem__buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}

export default GameItem
