import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

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
            <h3>SUBMISSION SUCCESS</h3>
            <Button onClick={startOver}>START OVER</Button>
        </>
    )
}

export default SubmissionSuccess;