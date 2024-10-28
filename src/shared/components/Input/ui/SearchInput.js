import "./SearchInput.css"


export const SearchInput = () => {

    return (
        <>
            <span className={"input_box byte-area-align search-input"}>
                <input type="text" name="keyword" id="keyword"/>
                <div className={"byte-area ml10"} id="keywordByteArea">
                    <span id="keywordByte">0</span>/ 100 byte
                </div>
                <button type="button" className={"btn_sch"} name="searchBtn"></button>
            </span>
        </>
    )
}

export default SearchInput;
