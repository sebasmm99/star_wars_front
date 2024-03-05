import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Title from './Title';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users?page=${page + 1}`);
        setUsers(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCheckboxChange = (index) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index].favorite = !updatedUsers[index].favorite;
      return updatedUsers;
    });
  };

  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Lastname</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4}>Loading...</TableCell>
            </TableRow>
          ) : (
            users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={user.favorite || false}
                    onChange={() => handleCheckboxChange(index)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </React.Fragment>
  );
}