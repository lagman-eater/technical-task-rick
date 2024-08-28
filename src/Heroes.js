import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHeroes } from './redux/heroesSlicer'
import { setPage } from './redux/pageSlicer'
import { setFilter } from './redux/filterSlicer'
import { setItemsCount } from './redux/itemsCountSlicer'
import { Link } from 'react-router-dom'
import PaginationComp from './components/PaginationComp'
import SearchComp from './components/SearchComp'
import FilterComp from './components/FilterComp'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './components/Main/Main.module.css'

const Heroes = () => {
    const dispatch = useDispatch()

    const itemsCount = useSelector(state => state.itemsCount)
    const handleItemsCountChange = (event) => {
        dispatch(setItemsCount(event.target.value))
    };

    const page = useSelector(state => state.page)
    const filter = useSelector(state => state.filter)
    const search = useSelector(state => state.search)

    const data = useSelector(state => state.heroes)
    useEffect(() => {
        const query = {
            page: page,
            filter: filter,
            search: search
        }

        if (search.search !== '') {
            dispatch(setPage(1))
        }

        dispatch(fetchHeroes(query))
    }, [filter, search, page])

    return (
        <>
            <div className={styles.filter}>

                <Box sx={{ minWidth: 300, maxWidth: 500 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Heroes</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={itemsCount.itemsCount}
                            label="Age"
                            onChange={handleItemsCountChange}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <FilterComp />

                <div className={styles.search}>
                    <SearchComp />
                </div>
            </div>
            <div className={styles.cardCont}>
                {
                    data.isLoading
                        ?
                        <h1>Loading...</h1>
                        :
                        data.data.error == 'There is nothing here'
                            ?
                            <div>There is nothing there</div>
                            :
                            data.data.results.map((heroes, index) => {
                                if (index < itemsCount.itemsCount) {
                                    return (
                                        <>
                                            <article className={styles.card} key={heroes.id}>
                                                <div className={styles.image}><img src={heroes.image} alt={heroes.name} /></div>
                                                <div className={styles.info}>
                                                    <Link className={styles.h2} to={`heroes/${heroes.id}`}>{heroes.name}</Link>
                                                    <span className={heroes.status === 'Alive' ? styles.alive : heroes.status === 'unknown' ? styles.unknown : styles.dead}>{heroes.status}</span>
                                                </div>
                                            </article>
                                        </>
                                    )
                                }
                            })

                }
            </div>
            <div className={styles.pagination}>
                <PaginationComp />
            </div>
        </>
    )
}

export default Heroes