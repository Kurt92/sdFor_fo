export const rowKey = "onClickTableRow";

//Action construct
export const setKey = key => ({ type: rowKey, key });

const initialState = {
    key: 0,
};

const onClickTableRowReducer = (state = initialState, action) => {
    console.log(action)

    return {
        ...state,
        key: action.key
    };
};

export default onClickTableRowReducer;