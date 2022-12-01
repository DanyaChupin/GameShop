import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem/OrderItem'
import { calctotalPrice } from '../../components/utils'
import styles from './OrderPage.module.scss'
const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  if (!items.length) {
    return <h1>Корзина пуста</h1>
  }
  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__left}>
        {items.map(game => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className={styles.orderPage__right}>
        <div className={styles.orderPage__totalPrice}>
          <span>
            {items.length} товаров на сумму{calctotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
