// reducers/rootReducer.js

/** root reducer */
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import btnActiveReducer from "./btnActiveReducer";
import searchFilterShownReducer from "./searchFilterReducer";
import onClickTableRowReducer from "./onClickTableRowReducer";

// 루트리듀서임
// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어줌
const rootReducer = combineReducers({
    count : counterReducer,
    activeBtn : btnActiveReducer,
    searchFilterBtn : searchFilterShownReducer,
    setOnClickRowKey : onClickTableRowReducer
});

export default rootReducer;