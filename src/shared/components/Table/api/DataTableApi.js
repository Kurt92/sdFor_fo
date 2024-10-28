//import "./DataTable.css"
import axios from "axios";
import {useState} from "react";


export const DataTableApi = () => {

    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [loading, setLoading] = useState(false);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight && !loading) {
            setPage(page + 1);
        }
    };

    const getData = () => {
        setLoading(true);
        axios
            // .get("/sampleData/sample.json")
            .post("http://localhost:8088/f/api/test/hnb/customers",{page:page, perPage:perPage})
            .then((result) => {
                console.log(result.data.data.contents);
                setRows([...rows, ...result.data.data.contents.slice(0, 10)]);
                setLoading(false);
            })
            .catch(() => {
                console.log("failed");
            });
    };

};

export default DataTableApi;
