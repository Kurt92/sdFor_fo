import "../../common.css"
import "./Button.css"
export const SuspendBtn = ({isChecked}) => {

    return (
        <>
            <button className="btn_small_blur1" disabled={!isChecked}>
                <span>Suspend</span>
            </button>
        </>
    )
}

export default SuspendBtn;
