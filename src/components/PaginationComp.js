import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { setPage } from '../redux/pageSlicer'

const PaginationComp = () => {
    const dispatch = useDispatch()

    const page = useSelector(state => state.page)
    const data = useSelector(state => state.heroes)
    const handlePageChange = (e, value) => {
        dispatch(setPage(value))
    }
    return (
        <Pagination count={data?.data?.info?.pages}
            page={page.page} onChange={handlePageChange}
        />
    )
}

export default PaginationComp