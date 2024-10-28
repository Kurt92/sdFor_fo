import "../../common.css"
import "./Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux";
export const SendMsgBtn = () => {

    const activeBtnAt = useSelector(state => state.btnActive);

    return (
        <>
            <button className={`btn_middle_light ml-1 ${activeBtnAt.at}`} disabled={activeBtnAt.atBool}>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                <span>Send Message</span>
            </button>
        </>
    )
}

export default SendMsgBtn;
