import "./SearchBar.css"
import SearchInput from "../../../shared/components/Input/Search/ui/SearchInput";
import SearchFilterBtn from "../../../shared/components/Button/SearchFilterBtn";
export const SearchBar = () => {




    return (
        <>
            <div className={"search-bar"}>
                <label className={"text_2"}>Search</label>
                <SearchInput/>
                {/*<SearchFilterBtn/>*/}
            </div>
        </>
    )
}
export default SearchBar;