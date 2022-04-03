import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import BackButton from '../BackButton/BackButton';
import Button from '@material-ui/core/Button';

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
            <h3>Review your feedback</h3>
            <BackButton handleBackBtn={handleBackBtn}/>
            <table>
                <thead>
                    <tr>
                        <th>FEELING</th>
                        <th>UNDERSTANDING</th>
                        <th>SUPPORT</th>
                        <th>COMMENTS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                    </tr>
                </tbody>
            </table>

            <Button onClick={handleSubmission}>SUBMIT</Button>
        </>
    )
}

export default Review;