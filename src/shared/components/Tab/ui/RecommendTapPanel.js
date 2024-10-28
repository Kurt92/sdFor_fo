import {Box} from "@mui/material";

const TabPanel1 = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} className="flex overflow-auto">
                    {children}
                </Box>
            )}
        </div>
    );
};

export default TabPanel1;
