import "../../common.css"
import "./Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons"
import {useDispatch, useSelector} from "react-redux";
import {changeSearchFilterAt} from "../../../app/redux/slice/searchFilterSlice";
export const SearchFilterBtn = () => {
    const dispatch = useDispatch();
    const searchFilterBtnAt = useSelector(state => state.searchFilterShown);

    let searchFilterBtnClick = () => {
        console.log(searchFilterBtnAt);
        searchFilterBtnAt ? dispatch(changeSearchFilterAt("hide")) : dispatch(changeSearchFilterAt("show"));
    }

    return (
        <>
            <button className="btn_middle_light ml-5" onClick={searchFilterBtnClick}>
                <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                <span>Search Filter</span>
            </button>
        </>
    )
}

export default SearchFilterBtn;
