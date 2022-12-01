import React from 'react'
import styles from './GamePage.module.scss'
import { useSelector } from 'react-redux'
import GameCover from '../../components/GameCover/GameCover'
import GameGenre from '../../components/GameGenre/GameGenre'
import GameBuy from '../../components/GameBuy/GameBuy'
const GamePage = () => {
  const game = useSelector(state => state.game.currentGame)
  console.log('game', game)
  if (!game) return null
  return (
    <div className={styles.gamePage}>
      <h1 className={styles.gamePage__title}>{game.title}</h1>
      <div className={styles.gamePage__content}>
        <div className={styles.gamePage__left}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            frameBorder="0"
            title="Youtube Video Player"
          ></iframe>
        </div>
        <div className={styles.gamePage__right}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p>
            Жанр:
            {game.genres.map(genre => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </p>

          <div className={styles.gamePage__buygame}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
