import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem/OrderItem'
import { calctotalPrice } from '../../components/utils'
import styles from './OrderPage.module.scss'
const OrderPage = () => {
  let numberOfGoods = ''

  const items = useSelector(state => state.cart.itemsInCart)
  if (items.length > 4) {
    numberOfGoods = ' товаров на сумму '
  } else if (items.length === 1) {
    numberOfGoods = ' товар на сумму '
  } else {
    numberOfGoods = ' товара на сумму '
  }

  if (!items.length) {
    return <h1>Корзина пуста</h1>
  }
  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__left}>
        {items.map(game => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className={styles.orderPage__right}>
        <div className={styles.orderPage__totalPrice}>
          <span>
            {items.length}
            {numberOfGoods}
            {calctotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
