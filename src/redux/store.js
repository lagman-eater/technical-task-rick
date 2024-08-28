import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlicer";
import heroesReducer from "./heroesSlicer";
import heroReducer from "./heroSlicer";
import pageReducer from './pageSlicer'
import searchReducer from "./searchSlicer";
import itemsCountReducer from './itemsCountSlicer'

export const store = configureStore({
    reducer: {
        heroes: heroesReducer,
        hero: heroReducer,
        page: pageReducer,
        filter: filterReducer,
        search: searchReducer,
        itemsCount: itemsCountReducer
    }
})