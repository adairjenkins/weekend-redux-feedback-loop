import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Start() {
    const history = useHistory();
    
    return (
        <> 
            <p>Please take a few minutes to complete feedback for the day.</p>
            <Button onClick={() => history.push('/feeling')}>BEGIN</Button>
        </>
    )
}

export default Start;