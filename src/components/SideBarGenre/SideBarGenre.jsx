import React from 'react'
import { useDispatch } from 'react-redux'
import { GAMES } from '../../data/data'
import { setCurrentGamesFilter } from '../../redux/gameFiltering/reducer'
import styles from './SideBarGenre.module.scss'
const SideBarGenre = ({ setRightGame }) => {
  const games = GAMES.map(games => games.genres).flat()
  games.unshift('Все игры')
  const dispatch = useDispatch()
  const handleClick = genre => {
    setRightGame('')
    genre === 'Все игры'
      ? dispatch(setCurrentGamesFilter(false))
      : dispatch(setCurrentGamesFilter(genre))
  }
  return (
    <div className={styles.sideBar__genres}>
      {games
        .filter((elem, index) => games.indexOf(elem) === index)
        .map(elem => (
          <button
            className={styles.sideBar__btn}
            key={elem}
            onClick={genre => handleClick(genre.target.innerText)}
          >
            {elem}
          </button>
        ))}
    </div>
  )
}

export default SideBarGenre
