import React from 'react'
import styles from './Button.module.scss'
const Button = ({ onClick, type, children, size = 's' }) => {
  return (
    <button className={[styles.button, styles.buttonPrimary]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
