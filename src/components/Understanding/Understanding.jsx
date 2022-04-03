import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {
    const history = useHistory();
    const [understandingVal, setUnderstandingVal] = useState('');
    const dispatch = useDispatch();

    const handleUnderstandingSubmit = (event) => {
        event.preventDefault();
        console.log('handleUnderstandingSubmit func');
        dispatch({type: 'ADD_UNDERSTANDING', payload: understandingVal})
        history.push('/support')
    }

    return (
        <>
            <h3>UNDERSTANDING COMPONENT</h3>
            <form onSubmit={handleUnderstandingSubmit}>
                <input 
                    required 
                    placeholder="Choose 1-5" 
                    value={understandingVal}
                    onChange={(event) => setUnderstandingVal(event.target.value)}
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Understanding;