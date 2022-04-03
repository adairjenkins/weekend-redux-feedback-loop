import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserInput from '../UserInput/UserInput';


function Feeling() {
    const history = useHistory();
    const [feelingVal, setFeelingVal] = useState('');
    const dispatch = useDispatch();

    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('handleFeelingSubmit func');
        dispatch({type: 'ADD_FEELING', payload: feelingVal})
        history.push('/understanding')
    }
 
    return (
        <>
            <h3>FEELING COMPONENT</h3>
            <form onSubmit={handleFeelingSubmit}>
                < UserInput/>
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Feeling;