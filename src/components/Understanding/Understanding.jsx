import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';

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
            <h3>UNDERSTANDING</h3>
            <BackButton handleBackBtn={handleBackBtn}/>
            <form onSubmit={handleUnderstandingSubmit}>
                <input 
                    required 
                    placeholder={understandingState ? understandingState : 'Choose 1-5'} 
                    value={understandingVal}
                    onChange={(event) => setUnderstandingVal(event.target.value)}
                />
                <br/>
                <NextButton/>
            </form>
        </>
    )
}

export default Understanding;