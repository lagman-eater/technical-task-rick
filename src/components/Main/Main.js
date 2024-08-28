import React from 'react'
import Hero from '../../Heroes'
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={styles.main}>
        <Hero/>
    </main>
  )
}

export default Main