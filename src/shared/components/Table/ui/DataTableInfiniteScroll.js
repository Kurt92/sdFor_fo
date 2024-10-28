import "./DataTable.css"
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Checkbox, debounce} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
// import {changeAt} from "../../../../app/reducers/btnActiveReducer";
import {useNavigate} from "react-router-dom";
import {changeBtnAt} from "../../../../app/redux/slice/btnActiveSlice";
import {setDataId} from "../../../../app/redux/slice/dataIdSlice";
// import {setKey} from "../../../../app/reducers/onClickTableRowReducer";

const columns = [
    {
        id: 'cstmrNm',
        label: 'Name',
        minWidth: 170,
    },
    {
        id: 'age',
        label: 'AgeGroup',
        minWidth: 100,
    },
    {
        id: 'bhfNm',
        label: 'Branch',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

    {
        id: 'brthdy',
        label: 'brthdyBirthday',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'email',
        label: 'E-mail',
        minWidth: 170,
    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 170,
    },
];

export const DataTable = () => {

    const dispatch = useDispatch();
    const { btnAt } = useSelector(state => state.btnActive);
    const btnDisabled = useSelector(state => state.btnDisabled);

    const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedAllAt, setSelectedAllAt] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [page]);

    // useEffect(() => {
    //     if (selectedRows.length > 0) {
    //         dispatch(changeAt("active"));
    //     } else {
    //         dispatch(changeAt("disabled"));
    //     }
    // }, [selectedRows, dispatch]);


    //데이터 조회
    const getData = () => {
        setLoading(true);

        if(!loading) {
            axios
                // .get("/sampleData/sample.json")
                .post("http://localhost:8088/f/api/test/hnb/customers",{page:page, perPage:perPage})
                .then((result) => {
                    console.log(result.data.data.contents);
                    setRows([...rows, ...result.data.data.contents]);
                    if(selectedAllAt) {
                        let idArr = [];
                        rows.forEach((item) => {idArr.push(item.mesureMastrId)})
                        setSelectedItem(idArr);
                        // setSelectedItem([...selectedItem, ...result.data.data.contents.mesureMastrId])
                    }
                    setLoading(false);
                })
                .catch(() => {
                    console.log("failed");
                });
        }
    };

    //페이지 증가 fn
    const pageNumAdd = useCallback(debounce(() => {
        setPage(prevPage => prevPage + 1);
    }, 200), []);

    const checkedAllState = (id) => {
        let at = selectedItem.includes(id) ? true : false;
        if(selectedAllAt) at = true;
        return at;
    }


    //스크롤 감지 핸들러
    const scrollhandler = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if(scrollHeight - scrollTop -1 <= clientHeight) {
            pageNumAdd();
        }
    };

    //전체선택 체크박스 핸들러
    const selectAllCheckBoxChangeHandler = ({checked}) => {

        if(checked) {
            dispatch(changeBtnAt("active"));
            setSelectedAllAt(true);
            let idArr = [];
            rows.forEach((item) => {idArr.push(item.mesureMastrId)})
            setSelectedItem(idArr);
        } else {
            dispatch(changeBtnAt("disabled"));
            setSelectedAllAt(false);
            setSelectedItem([]);
        }
    };

    //체크박스 핸들러
    const checkboxChangeHandler = (target, e) => {

        if(selectedAllAt) {
            setSelectedItem(selectedItem.filter((item) => item !== target.mesureMastrId));
            setSelectedAllAt(false);
            // dispatch(changeAt("active"));
        }
        else {
            if(e.target.checked) {
                setSelectedItem([...selectedItem, target.mesureMastrId]);
                // dispatch(changeAt("disabled"));
            }
            else {
                setSelectedItem(selectedItem.filter((item) => item !== target.mesureMastrId))
            }
        }
    };

    const moveDetailPage = (row) => {
        console.log("cell clicked" , row);
        navigate(`/crm/hb/customers/customer/customer_main/detail/`);
        dispatch(setDataId(row.cstmrId));
    }



    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }} onScroll={scrollhandler}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className={"table-header"}>
                            <TableRow>
                                <TableCell padding="checkbox" className={"costom-table-header"}>
                                    <Checkbox
                                        checked={selectedAllAt}
                                        onClick={(e) => selectAllCheckBoxChangeHandler(e.target)}
                                    />
                                </TableCell>
                                {columns.map((column) => {
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{minWidth: column.minWidth}}
                                            className={"costom-table-header"}
                                        >
                                            {column.label}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                        // selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                // checked={isItemSelected}
                                                onClick={(e) => checkboxChangeHandler(row, e)}
                                                // onChange={(target) => checkboxChangeHandler(row)}
                                                checked={checkedAllState(row.mesureMastrId)}
                                                // checked={selectedAllAt}
                                            />
                                        </TableCell>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} onClick={() => moveDetailPage(row)}>
                                                    {column.format && typeof value === "number" ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*{loading && <div>Loading...</div>}*/}
            </Paper>
        </>
    );
};

export default DataTable;
