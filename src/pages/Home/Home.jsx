import React, { useState } from 'react'
import styles from './Home.module.scss'
import { GAMES } from '../../data/data'
import GameItem from '../../components/GameItem/GameItem'
import { setCurrentGamesFilter } from '../../redux/gameFiltering/reducer'
import { useDispatch, useSelector } from 'react-redux'
import SideBarGenre from '../../components/SideBarGenre/SideBarGenre'
import SerchInput from '../../components/SerchInput/SerchInput'

const HomePage = () => {
  const [rightGame, setRightGame] = useState('')
  const dispatch = useDispatch()
  const onChangeSearchInput = e => {
    setRightGame(e.target.value)
    dispatch(setCurrentGamesFilter(false))
  }

  const currentGenreFilter = useSelector(
    state => state.gamesFiltering.currentGameFilter
  )

  return (
    <>
      <SerchInput
        onChangeSearchInput={onChangeSearchInput}
        rightGame={rightGame}
      />
      <div className={styles.homePage}>
        <div className={styles.homePage__left}>
          <h2 className={styles.homePage__leftTitle}>Сортировка по:</h2>
          <SideBarGenre setRightGame={setRightGame} />
        </div>
        <div className={styles.homePage__right}>
          {currentGenreFilter
            ? GAMES.filter(item =>
                item.genres.toString().includes(currentGenreFilter)
              ).map(game => <GameItem game={game} key={game.id} />)
            : GAMES.filter(games =>
                games.title.toLowerCase().includes(rightGame.toLowerCase())
              ).map(game => <GameItem game={game} key={game.id} />)}
        </div>
      </div>
    </>
  )
}

export default HomePage
