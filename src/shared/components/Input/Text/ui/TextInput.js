import "./TextInput.css"
import {Box, TextField} from "@mui/material";


export const TextInput = () => {

    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled"/>
            <TextField id="standard-basic" label="Standard" variant="standard"/>
        </>
    )
}

export default TextInput;
