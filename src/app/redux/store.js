import {configureStore, createSlice} from '@reduxjs/toolkit'
import btnActive from './slice/btnActiveSlice'
import searchFilterShown from "./slice/searchFilterSlice";
import dataIdSlice from "./slice/dataIdSlice";

export default configureStore({
    reducer: {
        btnActive : btnActive.reducer,
        searchFilterShown : searchFilterShown.reducer,
        dataId : dataIdSlice.reducer
    }
})