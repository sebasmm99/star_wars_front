import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Title from './Title';
import { useState, useEffect } from 'react';


export default function Favs() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const rowsPerPage = 10; // Número fijo de filas por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page + 1}`);
        const data = await response.json();
        setCharacters(data.results);
        setCount(data.count);
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
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].favorite = !updatedCharacters[index].favorite;
      return updatedCharacters;
    });
  };

  return (
    <React.Fragment>
      <Title>My Favorite Characters</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }} >Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Height</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Mass</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Gender</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Birth Year</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Hair Color</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Skin Color</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} >Eye Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={9}>Loading...</TableCell>
            </TableRow>
          ) : (
            characters.map((character, index) => (
              <TableRow key={character.name}>
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.height}</TableCell>
                <TableCell>{character.mass}</TableCell>
                <TableCell>{character.gender}</TableCell>
                <TableCell>{character.birth_year}</TableCell>
                <TableCell>{character.hair_color}</TableCell>
                <TableCell>{character.skin_color}</TableCell>
                <TableCell>{character.eye_color}</TableCell>
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