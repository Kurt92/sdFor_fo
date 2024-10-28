import {createSlice} from "@reduxjs/toolkit";


let dataId = createSlice ({
    name: 'dataId',
    initialState: 0,
    reducers: {
        setDataId(state, action){
            return action.payload;
        }
    }
})
export let {setDataId} = dataId.actions
export default dataId;