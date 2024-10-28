import {useState} from "react";
import DeleteBtn from "./DeleteBtn";
import ReturnBtn from "./ReturnBtn";
import SuspendBtn from "./SuspendBtn";

export const TextCheckbox = () => {
    let [isChecked, setIsChecked] = useState(false);
    let checkBoxClickTest = () => {
        setIsChecked(document.getElementById("clickTest").checked);
    }

    return (
        <>
            <label className={"text-blue-500 ml-10"}><input type={"checkbox"} className={""} id={"clickTest"} onClick={checkBoxClickTest} />Checked All Test</label>
            <br/>
            <DeleteBtn isChecked={isChecked} />
            <ReturnBtn isChecked={isChecked} />
            <SuspendBtn isChecked={isChecked} />
        </>
    )
}
export default TextCheckbox;