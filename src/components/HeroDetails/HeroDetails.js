import React from 'react'
import { fetchHero } from '../../redux/heroSlicer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './HeroDetails.module.css'


const HeroDetails = () => {
    const dispatch = useDispatch()
    const { heroId } = useParams()

    const data = useSelector(state => state.hero)
    useEffect(() => {
        dispatch(fetchHero(heroId))
    }, [])
    
    return (
        <div className={styles.cont}>
            {data.isLoading ?
                <h1>Loading...</h1> :
                <div className={styles.hero}>
                    <div className={styles.image}><img src={data.data.image} /></div>
                    <div className={styles.info}>
                        <h2>Name: {data.data.name}</h2>
                        <span>Gender: {data.data.gender}</span>
                        <span className={data.data.status === 'Alive' ? styles.alive : data.data.status === 'unknown' ? styles.unknown : styles.dead}>
                            <span className={styles.statusLabel}>Status: </span>
                            {data.data.status}</span>
                        <span>Species: {data.data.species}</span>
                        <span>Appearances: {data.data.episode.length}</span>
                        <span>Location: {data.data.location.name}</span>
                        <span>Origin: {data.data.origin.name}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeroDetails