import React from 'react'
import styles from './ItemsInCart.module.scss'
const ItemsInCart = ({ items }) => {
  return items ? <div className={styles.itemsInCart__cirlce}>{items}</div> : ''
}

export default ItemsInCart
