import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from 'axios';

function FeedbackRow({feedbackItem, getFeedback}) {
    
    const deleteRow = () => {
        console.log('delete id', feedbackItem.id);
        axios.delete(`/feedback/${feedbackItem.id}`)
            .then( response => {
                console.log(response);
                getFeedback();
            })
            .catch( (error) => {
                console.log('delete error', error);
            })
    }

    return (
    <TableRow>
        <TableCell>{feedbackItem.id}</TableCell>
        <TableCell>{feedbackItem.date}</TableCell>
        <TableCell>{feedbackItem.feeling}</TableCell>
        <TableCell>{feedbackItem.understanding}</TableCell>
        <TableCell>{feedbackItem.support}</TableCell>
        <TableCell>{feedbackItem.comments}</TableCell>
        <TableCell><DeleteForeverIcon onClick={deleteRow}/></TableCell>

    </TableRow>
    )
}

export default FeedbackRow;