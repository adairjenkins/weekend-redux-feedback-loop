import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Admin() {
    
    
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
                        <TableCell><Rating name="read-only" value={feedback.feeling} readOnly /></TableCell>
                        <TableCell><Rating name="read-only" value={feedback.understanding} readOnly /></TableCell>
                        <TableCell><Rating name="read-only" value={feedback.support} readOnly /></TableCell>
                        <TableCell>{feedback.comments}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}

export default Admin;