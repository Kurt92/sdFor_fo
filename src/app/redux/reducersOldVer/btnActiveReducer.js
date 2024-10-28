export const switchAt = "ACTIVE/DISABLE";

//Action construct
export const changeAt = at => ({ type: switchAt, at });

const initialState = {
    at: "disabled",
    atBool: true
};

const btnActiveReducer = (state = initialState, action) => {
    switch (action.at) {
        case "active":
            return {
                ...state,
                at: "active",
                atBool: false
            };
        case "disabled":
            return {
                ...state,
                at: "disabled",
                atBool: true
            };
        default:
            return state;
    }
};

export default btnActiveReducer;