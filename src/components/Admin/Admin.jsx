import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FeedbackRow from '../FeedbackRow/FeedbackRow';

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

    const allFeedback = useSelector(store => store.adminViewReducer);
    
    return (
        <>
            <h3>Admin View</h3>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allFeedback.map((feedbackItem) => {
                        return (
                            < FeedbackRow
                                key={feedbackItem.id}
                                feedbackItem={feedbackItem}
                            />
                        )
                    })}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}

export default Admin;