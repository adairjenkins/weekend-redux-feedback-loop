import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Admin() {
    useEffect(() => {
        getFeedback();
      }, []);
    
      const dispatch = useDispatch();
    
      const getFeedback = () => {
        //selects * from feedback table in database:
        axios.get('/feedback')
          .then(response => {
            dispatch({ type: 'GET_ALL_FEEDBACK', payload: response.data })
          })
          .catch((error) => {
            console.log('error getting feedback from database: ', error);
          })
      }
    
    return (
        <>
            <h3>ADMIN COMPONENT</h3>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}

export default Admin;