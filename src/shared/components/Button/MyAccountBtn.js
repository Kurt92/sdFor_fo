import "../../common.css"
import "./Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"
export const MyAccountBtn = () => {

    return (
        <>
            <button className="btn_middle_light">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span>My Account</span>
            </button>
        </>
    )
}

export default MyAccountBtn;
