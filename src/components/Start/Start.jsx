import { useHistory } from 'react-router-dom';

function Start() {
    const history = useHistory();
    
    return (
        <> 
            <p>Please take a few minutes to complete feedback for the day.</p>
            <button onClick={() => history.push('/feeling')}>BEGIN</button>
        </>
    )
}

export default Start;