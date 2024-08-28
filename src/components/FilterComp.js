import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/filterSlicer'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl';
import styles from '../components/Main/Main.module.css'

const PaginationComp = () => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter)
    const handleFilterChange = (e, value) => {
        dispatch(setFilter(value))
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" className={styles.filterLabel}>Status</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={filter.filter}
                onChange={handleFilterChange}
            >
                <FormControlLabel value="alive" control={<Radio />} label="Alive" />
                <FormControlLabel value="dead" control={<Radio />} label="Dead" />
                <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                <FormControlLabel value="" control={<Radio />} label="Default" />
            </RadioGroup>
        </FormControl>

    )
}

export default PaginationComp