import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './CartBlock.module.scss'
import CartMenu from '../CartMenu/CartMenu'
import { calctotalPrice } from '../utils'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { useNavigate } from 'react-router-dom'
const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisivle] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calctotalPrice(items)
  const history = useNavigate()
  const handleClick = useCallback(() => {
    setIsCartMenuVisivle(!isCartMenuVisible)
    history('/order')
  }, [history])
  return (
    <div className={styles.cartBlock}>
      {totalPrice ? (
        <span className={styles.cartBlock__totalPrice}>{totalPrice} руб.</span>
      ) : (
        ''
      )}
      {isCartMenuVisible ? (
        <CartMenu items={items} onClick={handleClick} />
      ) : (
        ''
      )}
      <div className={styles.cartBlock__totallenhts}>
        <ItemsInCart items={items.length} />
        <FaShoppingCart
          size={30}
          className={styles.cartBlock__icon}
          onClick={() => setIsCartMenuVisivle(!isCartMenuVisible)}
        />
      </div>
    </div>
  )
}

export default CartBlock
