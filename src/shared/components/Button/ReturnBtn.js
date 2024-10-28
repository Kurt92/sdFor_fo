import "../../common.css"
import "./Button.css"
export const ReturnBtn = ({isChecked}) => {

    return (
        <>
            <button className="btn_small_blur1" disabled={!isChecked}>
                <span>Return</span>
            </button>
        </>
    )
}

export default ReturnBtn;
