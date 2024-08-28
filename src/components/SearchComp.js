import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/searchSlicer'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const PaginationComp = () => {
    const dispatch = useDispatch()

    const search = useSelector(state => state.search)

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Search by name"
                variant="outlined"
                value={search.search !== '' ? search.search : ''}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />
        </Box>
    )
}

export default PaginationComp