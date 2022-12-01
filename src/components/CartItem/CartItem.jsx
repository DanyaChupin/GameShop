import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = ({ game }) => {
  return (
    <div className={styles.cartItem__wrapper}>
      <div className={styles.cartItem__title}>{game.title}</div>
      <div className={styles.cartItem__price}>
        {game.price} руб.
        <button onClick={() => null} className={styles.cartItem__button}>
          ?
        </button>
      </div>
    </div>
  )
}

export default CartItem
