import "../../common.css"
import "./Button.css"//import "../../shared/all.min.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux";

export const AddToGroupBtn = () => {

    const activeBtnAt = useSelector(state => state.btnActive);

    return (
        <>
            <button className={`btn_middle_light ${activeBtnAt.at} ml-1`} disabled={activeBtnAt.atBool}>
                <FontAwesomeIcon icon={faPlus} />
                <span>Add to Group</span>
            </button>
        </>
    )
}

export default AddToGroupBtn;
