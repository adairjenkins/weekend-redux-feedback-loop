import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Understanding() {
    const history = useHistory();
    const [understandingVal, setUnderstandingVal] = useState('');
    const dispatch = useDispatch();

    const understandingState = useSelector(store => store.feedbackReducer.understanding);

    const handleUnderstandingSubmit = (event) => {
        event.preventDefault();
        console.log('handleUnderstandingSubmit func');
        dispatch({type: 'ADD_UNDERSTANDING', payload: understandingVal})
        history.push('/support')
    }

    const handleBackBtn = () => {
        history.push('/feeling');
    }

    return (
        <>
            <h3>UNDERSTANDING COMPONENT</h3>
            <button onClick={handleBackBtn}>BACK</button>
            <form onSubmit={handleUnderstandingSubmit}>
                <input 
                    required 
                    placeholder={understandingState ? understandingState : 'Choose 1-5'} 
                    value={understandingVal}
                    onChange={(event) => setUnderstandingVal(event.target.value)}
                />
                <br/>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}

export default Understanding;