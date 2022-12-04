import React from 'react'
import { useDispatch } from 'react-redux'
import GameCover from '../GameCover/GameCover'
import styles from './OrderItem.module.scss'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import Button from '../Button/Button'

const OrderItem = ({ game }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }
  return (
    <div className={styles.orderItem}>
      <div className={styles.orderItem__cover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.orderItem__title}>
        <span>{game.title}</span>
      </div>
      <div className={styles.orderItem__price}>
        <span>{game.price} руб.</span>
        <Button
          size={25}
          className={styles.cartItem__deliteicon}
          onClick={handleClick}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default OrderItem
