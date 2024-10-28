export const searchFilterAt = "ON/OFF";

export const changeAt = at => ({type: searchFilterAt, at});

const initialState = {
    at: false
}

const searchFilterShownReducer = (state = initialState, action) => {
    switch(action.at) {
        case "ON" :
            return {
                ...state,
                at: true,
            };
        case "OFF" :
            return {
                ...state,
                at: false,
            };
        default:
            return state;
    }
};

export default searchFilterShownReducer