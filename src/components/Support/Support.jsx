import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import NextButton from '../NextButton/NextButton';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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
            <h3>How well supported did you feel today?</h3>
            < BackButton handleBackBtn={handleBackBtn}/>
            <form onSubmit={handleSupportSubmit}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                    name="simple-controlled"
                    value={supportVal}
                    onChange={(event, newValue) => {
                        setSupportVal(newValue);
                    }}
                    />
                </Box>
                <NextButton/>
            </form>
        </>
    )
}

export default Support;