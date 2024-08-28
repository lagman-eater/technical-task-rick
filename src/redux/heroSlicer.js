import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'

export const fetchHero = createAsyncThunk("fetchHero", async (heroId) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${heroId}`)
    console.log(data);
    return data.json()
})

const heroSlice = createSlice({
    name: 'hero',
    initialState: {
        isLoading: true,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHero.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchHero.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchHero.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default heroSlice.reducer