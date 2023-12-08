import React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNews } from "../../../Reducer/AdminReducer";
import "./Style.css";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const Dispatch = useDispatch();
  const rows = useSelector((state) => state.admin.data.News);
  useEffect(() => {
    Dispatch(getAllNews());
  }, []);
  return (
    <div className="sen">
      <h1>Crypto Signals</h1>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: {
              xs: 100,
              sm: 300,
              md: 900,
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <b>No.</b>
              </TableCell>
              <TableCell align="left">
                <b>Title</b>
              </TableCell>
              <TableCell align="left">
                <b>Action</b>;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="left">{row.Title}</TableCell>
                  <TableCell align="left">
                    <Link to={row.Url} target="_blank">
                      <button>View</button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
