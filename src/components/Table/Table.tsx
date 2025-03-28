import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

type TableBaseProps = MuiTableProps;

export interface TableColumn {
  id: string;
  label?: string;
}

export interface TableProps extends TableBaseProps {
  columns: TableColumn[];
  data: any[];
}

export const Table: React.FC<TableProps> = ({ columns, data, ...rest }) => {
  return (
    <TableContainer>
      <MuiTable {...rest}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
