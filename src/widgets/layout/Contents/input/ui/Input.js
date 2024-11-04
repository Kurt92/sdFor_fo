import {useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import {isVisible} from "@testing-library/user-event/dist/utils";
import TextInput from "../../../../../shared/components/Input/Text/ui/TextInput";
import {MenuItem, TextField} from "@mui/material";

const Board = () => {


    return (
        <>
            <div className={"contents-area"}>
                <div className={"content"}>
                    <div className={"mt-5 w-1/2"}>
                        <TextField id="standard-basic" label="title" variant="standard" fullWidth={true} />
                    </div>
                    <div className={"mt-5 w-1/3"}>
                        <div className={"flex"}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="EUR"
                                helperText=""
                                variant="standard"
                                fullWidth={true}
                                sx={{ mt: 2, mr: 2}} // 마진 탑 2단위 (기본적으로 8px * 2 = 16px)
                            >
                                <MenuItem key={1} value={"sample item"}>
                                    {"smaple item1"}
                                </MenuItem>
                            </TextField>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="EUR"
                                helperText=""
                                variant="standard"
                                fullWidth={true}
                                sx={{ mt: 2, mr: 2 }}
                            >
                                <MenuItem key={1} value={"sample item"}>
                                    {"smaple item1"}
                                </MenuItem>
                            </TextField>
                        </div>
                    </div>
                </div>

            </div>
            </>
            )
            }

            export default Board;
