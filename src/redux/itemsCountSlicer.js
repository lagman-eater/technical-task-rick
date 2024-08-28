import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsCount: 10
}

const itemsCountSlice = createSlice({
    name: 'itemsCount',
    initialState,
    reducers: {
        setItemsCount: (state, action) => {
            state.itemsCount = action.payload
        }
    }
})

export const { setItemsCount } = itemsCountSlice.actions

export default itemsCountSlice.reducer