import {createSlice} from "@reduxjs/toolkit";


let searchFilterShown = createSlice({
    name:'searchFilterShown',
    initialState: false,
    reducers: {
        changeSearchFilterAt(state, action) {
            switch(action.payload) {
                case "show" :
                    return true;
                case "hide" :
                    return false;
                default:
                    return state
            }
        }
    }
})

export let {changeSearchFilterAt} = searchFilterShown.actions
export default searchFilterShown;