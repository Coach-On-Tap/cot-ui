import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from "@mui/material";

type PaginationBaseProps = MuiPaginationProps;

export interface PaginationProps extends PaginationBaseProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination = ({ count, page, onChange, ...rest }: PaginationProps) => (
  <MuiPagination count={count} page={page} onChange={onChange} {...rest} />
);

export default Pagination;
