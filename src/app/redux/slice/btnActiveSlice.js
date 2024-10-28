import {createSlice} from "@reduxjs/toolkit";

let btnActive = createSlice({
    name: 'btnActiveAt',
    initialState: {at: 'disabled', atBool: true},
    reducers: {
        changeBtnAt(state, action) {
            switch (action.payload) {
                case "active":
                    state.at = "active"
                    state.atBool = false
                    break;
                case "disabled":
                    state.at = "disabled"
                    state.atBool = true
                    break
                default:
                    return state
            }
        }
    }
})
export let {changeBtnAt} = btnActive.actions

export default btnActive;