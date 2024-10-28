import "../../common.css"
import "./Button.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux";

export const DownloadExcelBtn = () => {

    const activeBtnAt = useSelector(state => state.btnActive);

    return (
        <>
            <button className={`btn_middle_light ${activeBtnAt.at} ml-1`} disabled={activeBtnAt.atBool}>
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                <span>Download Excel</span>
            </button>
        </>
    )
}

export default DownloadExcelBtn;
