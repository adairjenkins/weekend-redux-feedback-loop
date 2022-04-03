import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
    const history = useHistory();
    const [supportVal, setSupportVal] = useState('');
    const dispatch = useDispatch();

    const handleSupportSubmit = (event) => {
        event.preventDefault();
        console.log('handleSupportSubmit func');
        dispatch({type: 'ADD_SUPPORT', payload: supportVal})
        history.push('/comments')
    }

    return (
        <>
            <h3>SUPPORT COMPONENT</h3>
            <form onSubmit={handleSupportSubmit}>
                <input 
                    required 
                    placeholder="Choose 1-5" 
                    value={supportVal}
                    onChange={(event) => setSupportVal(event.target.value)}
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Support;