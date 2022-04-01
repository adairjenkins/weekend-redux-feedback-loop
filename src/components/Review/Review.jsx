import { useHistory } from 'react-router-dom';

function Review() {
    const history = useHistory();

    return (
        <>
            <h3>REVIEW COMPONENT</h3>
            <button onClick={() => history.push('/submission-success')}>BEGIN</button>
        </>
    )
}

export default Review;