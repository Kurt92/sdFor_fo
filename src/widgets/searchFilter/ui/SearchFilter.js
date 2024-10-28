import "./SearchFilter.css"
import {AnimatePresence, motion} from "framer-motion"
import {useDispatch, useSelector} from "react-redux";
import {isVisible} from "@testing-library/user-event/dist/utils";
export const SearchFilter = () => {


    return (
        <>
            <div className="flex-column search-filter-area p-3">
                <div className="layer_sec flex">
                    <div className="in_box_3">
                        <label htmlFor="branch" className={"in_title"}>Branch</label>
                        <div className="in_content_2">
                            <div className="input_box_2">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="in_box_3 ml-5">
                        <label htmlFor="branch" className={"in_title"}>Group</label>
                        <div className="in_content_2">
                            <div className="input_box_2">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="in_box_3 w_424 ml-5">
                        <label htmlFor="branch" className={"in_title"}>Last Visit</label>
                        <div className={"flex"}>
                            <div className="in_content_2">
                                <div className="input_box_2">
                                    <input type="text"/>
                                </div>
                            </div>
                            <em className="input_combo em">~</em>
                            <div className="in_content_2">
                                <div className="input_box_2">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="selectGenderAll" className="in_title">Gender</label>
                    <div className="in_content">
                        <ul className="check_wrap flex">
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="allSelect" id="selectGenderAll"/>
                                    <label htmlFor="selectGenderAll"><span>All</span></label>
                                </span>
                            </li>
                            <li>
                            <span className="inp_check_2">
                              <input type="checkbox" name="gender" id="female" value="{{this.codeNm}}"/>
                              <label htmlFor="female"><span>Female</span></label>
                            </span>
                                <span className="inp_check_2">
                              <input type="checkbox" name="gender" id="male" value="{{this.codeNm}}"/>
                              <label htmlFor="male"><span>Male</span></label>
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="selectAgeAll" className="in_title">Age</label>
                    <div className="in_content">
                        <ul className="check_wrap flex">
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="allSelect" id="selectAgeAll"/>
                                    <label htmlFor="selectAgeAll"><span>All</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="Age" id="10" value="{{this.codeNm}}"/>
                                    <label htmlFor="10"><span>10's</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="Age" id="20" value="{{this.codeNm}}"/>
                                    <label htmlFor="20"><span>20's</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="Age" id="30" value="{{this.codeNm}}"/>
                                    <label htmlFor="30"><span>30's</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="Age" id="40" value="{{this.codeNm}}"/>
                                    <label htmlFor="40"><span>40's</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="Age" id="50" value="{{this.codeNm}}"/>
                                    <label htmlFor="50"><span>50's +</span></label>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="selectTyAll" className="in_title">Skin Type</label>
                    <div className="in_content flex">
                        <li>
                            <span className="inp_check_2">
                                <input type="checkbox" name="allSelect" id="selectTyAll"/>
                                <label htmlFor="selectTyAll"><span>Select All</span></label>
                            </span>
                        </li>
                        <ol className="option_list">
                            <li className="skinTy_opt flex" id="skinTy_opt1">
                                <span className="t_order">Option1</span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>asd</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>asd</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>asd</span></label>
                                </span>
                            </li>
                            <li className="skinTy_opt" id="skinTy_opt2">
                                <span className="t_order">Option2</span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>qwer</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>qwer</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>qwer</span></label>
                                </span>
                            </li>
                            <li className="skinTy_opt flex" id="skinTy_opt3">
                                <span className="t_order">Option3</span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>asdf</span></label>
                                </span>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinTys" id="{{this.code}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.code}}"><span>asdf</span></label>
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="selectWrAll" className="in_title">Skin Concerns</label>
                    <div className="in_content flex">
                        <ul className="check_wrap">
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="allSelect" id="selectWrAll"/>
                                    <label htmlFor="selectWrAll"><span>Select All</span></label>
                                </span>
                            </li>
                        </ul>
                        <ul className="check_wrap flex flex-wrap">
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>aaa</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>bbb</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>ccc</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>ddd</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>eee</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>fff</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>ggg</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>hhh</span></label>
                                </span>
                            </li>
                            <li>
                                <span className="inp_check_2">
                                    <input type="checkbox" name="skinWrs" id="{{this.codeNm}}" value="{{this.codeNm}}"/>
                                    <label htmlFor="{{this.codeNm}}"><span>iii</span></label>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="csmtc" className="in_title" >Recommend Cosmetic</label>
                    <div className="in_content_2">
                        <div className="input_double ">
                            <div className="input_box_2 input_box_product byte-area-align flex" id="csmtcAuto">
                                <input type="text" name="prductNm" id="csmtc"/>
                                <div className="byte-area ml10" id="csmtcByteArea">
                                    <span id="csmtcByte">0</span>&nbsp;/ 100 byte
                                </div>
                                <div className="auto_wrapper_2">
                                    <div className="auto_content">
                                        <div className="productSearchResultArea"></div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn_middle_white iaddition disabled" id="addCsmtcBtn" disabled>Add</button>
                        </div>
                    </div>
                    <div className="selected_list" id="addedCsmtcs"></div>
                </div>
                <div className="layer_sec">
                    <label htmlFor="trt" className="in_title">Recommend Treatment</label>
                    <div className="in_content_2">
                        <div className="input_double">
                            <div className="input_box_2 input_box_treatment byte-area-align flex" id="trtAuto">
                                <input type="text" name="treatmentNm" id="trt"/>
                                <div className="byte-area ml10" id="trtByteArea">
                                    <span id="trtByte">0</span>&nbsp;/ 100 byte
                                </div>
                                <div className="auto_wrapper_2">
                                    <div className="auto_content">
                                        <div className="treatmentSearchResultArea"></div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn_middle_white iaddition disabled" id="addTrtBtn" disabled >Add</button>
                        </div>
                    </div>
                    <div className="selected_list" id="addedTrts"></div>
                </div>
                <div className="layer-option-btn"></div>
            </div>
        </>
    )
}

export default SearchFilter