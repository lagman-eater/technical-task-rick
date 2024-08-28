import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHeroes = createAsyncThunk("fetchHeroes", async (query) => {
    const {page, filter, search} = query
    const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page.page}&status=${filter.filter}&name=${search.search}`)
    return data.json()
})

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: {
        isLoading: true,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHeroes.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchHeroes.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchHeroes.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default heroesSlice.reducer