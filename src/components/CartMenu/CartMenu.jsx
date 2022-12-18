import React from 'react'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { calctotalPrice } from '../utils'
import styles from './CartMenu.module.scss'
const CartMenu = ({ items, onClick }) => {
  return (
    <div
      className={styles.cartMenu}
      style={
        items.length ? { width: '400px' } : { width: '200px', left: '-200px' }
      }
    >
      <div className={styles.cartMenu__gamelist}>
        {items.length
          ? items.map(game => <CartItem key={game.title} game={game} />)
          : 'Корзина пуста'}
      </div>
      {items.length ? (
        <div className={styles.carMenu__arrange}>
          <div className={styles.carMenu__totalprice}>
            <span>Итого</span>
            <span>{calctotalPrice(items)} .руб</span>
          </div>
          <Button onClick={onClick}> Оформить заказ</Button>
        </div>
      ) : null}
    </div>
  )
}

export default CartMenu
