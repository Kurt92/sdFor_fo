import "./DataTable.css"
import axios from "axios";
import {useEffect, useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {
        id: 'nm',
        label: 'Name',
        minWidth: 170,
    },
    {
        id: 'ageGroup',
        label: 'AgeGroup',
        minWidth: 100,
    },
    {
        id: 'branch',
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
let createData = (age, ageGroup, branch, nm, brthdy, email, gender) => {
    // const density = population / size;
    return { age, ageGroup, branch, nm, brthdy, email, gender };
}

export const DataTable = () => {

    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPerPage(+event.target.value);
        setPage(0);
    };

    const getData = () => {
        axios
            .get("/sampleData/sample.json")
            .then((result) => {
                const res = result.data.data.map(item =>
                    createData(item.name, item.iosCode, item.size, item.density)  // 데이터 구조에 맞게 변환합니다.
                );
                setRows(res);
            })
            .catch(() => {
                console.log("failed");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className={"table-header"}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        className={"costom-table-header"}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * perPage, page * perPage + perPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={perPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default DataTable;
