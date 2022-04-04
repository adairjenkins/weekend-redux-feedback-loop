import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Review() {
    const history = useHistory();

    const feedback = useSelector(store => store.feedbackReducer)

    const handleSubmission = () => {
        console.log('handleSubmission func');
        axios.post('/feedback', feedback)
        .then(response => {
            history.push('/submission-success')
        })
        .catch(error => {
            console.log('error in post', error);
        });
    }

    const handleBackBtn = () => {
        history.push('/comments');
    }

    return (
        <>
            <h3>Please review your feedback</h3>
            <BackButton handleBackBtn={handleBackBtn}/>
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
                        <TableCell>{feedback.feeling}</TableCell>
                        <TableCell>{feedback.understanding}</TableCell>
                        <TableCell>{feedback.support}</TableCell>
                        <TableCell>{feedback.comments}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button onClick={handleSubmission}>SUBMIT</Button>
        </>
    )
}

export default Review;