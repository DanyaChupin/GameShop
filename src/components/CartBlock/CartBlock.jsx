import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { ImUser } from 'react-icons/im'
import styles from './CartBlock.module.scss'
import CartMenu from '../CartMenu/CartMenu'
import { calctotalPrice } from '../utils'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisivle] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calctotalPrice(items)
  const history = useNavigate()
  const { isAuth } = useAuth()
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
          onClick={() =>
            isAuth ? setIsCartMenuVisivle(!isCartMenuVisible) : ''
          }
        />
        <Link to={'/profile'}>
          <ImUser size={30} />
        </Link>
      </div>
    </div>
  )
}

export default CartBlock
