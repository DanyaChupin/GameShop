import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import Button from '../Button/Button'
import styles from './CartItem.module.scss'

const CartItem = ({ game }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }
  return (
    <div className={styles.cartItem__wrapper}>
      <div className={styles.cartItem__title}>{game.title}</div>
      <div className={styles.cartItem__price}>
        {game.price} руб.
        <div className={styles.cartItem__button}>
          <Button onClick={handleClick}>×</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
