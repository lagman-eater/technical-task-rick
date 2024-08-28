import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>The Rick and Morty Heroes API application</h1>
    </header>
  )
}

export default Header