import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SubmissionSuccess() {
    const history = useHistory();
    const dispatch = useDispatch ();
    
    const startOver = () => {
        console.log('startOver func');
        dispatch({type: 'RESET'});
        history.push('/');
    }
    
    return (
        <>
            <h3>SUBMISSION SUCCESS COMPONENT</h3>
            <button onClick={startOver}>START OVER</button>
        </>
    )
}

export default SubmissionSuccess;