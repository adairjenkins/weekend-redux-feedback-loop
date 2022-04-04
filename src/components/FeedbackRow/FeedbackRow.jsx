import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function FeedbackRow({feedbackItem}) {
    return (
    <TableRow>
        <TableCell>{feedbackItem.id}</TableCell>
        <TableCell>{feedbackItem.date}</TableCell>
        <TableCell>{feedbackItem.feeling}</TableCell>
        <TableCell>{feedbackItem.understanding}</TableCell>
        <TableCell>{feedbackItem.support}</TableCell>
        <TableCell>{feedbackItem.comments}</TableCell>
    </TableRow>
    )
}

export default FeedbackRow;