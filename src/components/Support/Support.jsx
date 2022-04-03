import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Support() {
    const history = useHistory();
    const [supportVal, setSupportVal] = useState('');
    const dispatch = useDispatch();

    const supportState = useSelector(store => store.feedbackReducer.support);
    
    const handleSupportSubmit = (event) => {
        event.preventDefault();
        console.log('handleSupportSubmit func');
        dispatch({type: 'ADD_SUPPORT', payload: supportVal})
        history.push('/comments')
    }

    const handleBackBtn = () => {
        history.push('/understanding');
    }

    return (
        <>
            <h3>SUPPORT</h3>
            <button onClick={handleBackBtn}>BACK</button>
            <form onSubmit={handleSupportSubmit}>
                <input 
                    required 
                    placeholder={supportState ? supportState : 'Choose 1-5'} 
                    value={supportVal}
                    onChange={(event) => setSupportVal(event.target.value)}
                />
                <br/>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}

export default Support;