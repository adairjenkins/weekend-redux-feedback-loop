import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {
    const history = useHistory();

    const feedback = useSelector(store => store.feedbackReducer)

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

            <button onClick={() => history.push('/submission-success')}>SUBMIT</button>
        </>
    )
}

export default Review;