import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

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

    return (
        <>
            <h3>REVIEW COMPONENT</h3>
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

            <button onClick={handleSubmission}>SUBMIT</button>
        </>
    )
}

export default Review;