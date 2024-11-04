import "./Board.css"
// import "../../../../shared/common.css"
import SearchBar from "../../../../searchBar/ui/SearchBar";
import DataTable from "../../../../../shared/components/Table/ui/DataTable";
import DownloadExcelBtn from "../../../../../shared/components/Button/DownloadExcelBtn";
import AddToGroupBtn from "../../../../../shared/components/Button/AddToGroupBtn";
import SendMsgBtn from "../../../../../shared/components/Button/SendMsgBtn";
import DataTableInfiniteScroll from "../../../../../shared/components/Table/ui/DataTableInfiniteScroll";
import DeleteBtn from "../../../../../shared/components/Button/DeleteBtn";
import SearchFilter from "../../../../searchFilter/ui/SearchFilter";
import {useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import {isVisible} from "@testing-library/user-event/dist/utils";

const Board = () => {


    const searchFilterBtnAt = useSelector(state => state.searchFilterShown);

    return (
        <>
            <div className={"contents-area"}>
                <SearchBar/>
                <AnimatePresence>
                    {searchFilterBtnAt && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration:0.5, ease: "easeInOut" }}
                        >
                            <SearchFilter/>
                        </motion.div>
                    )}
                </AnimatePresence>
                {searchFilterBtnAt.at && <SearchFilter/>}
                <div className={"content"} >
                    <div className={"btn-area"}>
                        <div className={"text-area"}>
                            <span className={"text_2"}>List</span>
                            <span>total <span>0</span> List</span>
                        </div>
                        <div>
                            <DownloadExcelBtn />
                            <AddToGroupBtn/>
                            <SendMsgBtn/>
                        </div>
                    </div>
                    <div className={"table-area"}>
                        {/*<DataTable/>*/}
                        <DataTableInfiniteScroll/>
                    </div>
                    <div className={"select-opt-area"}>
                        <DeleteBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board;
