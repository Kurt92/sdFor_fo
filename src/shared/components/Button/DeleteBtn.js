import "../../common.css"
import "./Button.css"
import {useState} from "react";
import {useSelector} from "react-redux";



export const DeleteBtn = () => {

    const activeBtnAt = useSelector(state => state.btnActive);

    return (
        <>
            <button className={`btn_small_blur1 ${activeBtnAt.at}`} disabled={activeBtnAt.atBool}>
                <span>Delete</span>
            </button>
        </>
    )
}

export default DeleteBtn;

