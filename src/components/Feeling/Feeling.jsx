import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Feeling() {
    const history = useHistory();
    const [feelingVal, setFeelingVal] = useState('');
    const dispatch = useDispatch();

    const feelingState = useSelector(store => store.feedbackReducer.feeling);

    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('handleFeelingSubmit func');
        dispatch({type: 'ADD_FEELING', payload: feelingVal})
        history.push('/understanding')
    }
 
    return (
        <>
            <h3>FEELING</h3>
            <form onSubmit={handleFeelingSubmit}>
                <input 
                    required 
                    placeholder={feelingState ? feelingState : 'Choose 1-5'} 
                    value={feelingVal}
                    onChange={(event) => setFeelingVal(event.target.value)}
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Feeling;