import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


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
            <h3>How are you feeling today?</h3>
            <form onSubmit={handleFeelingSubmit}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                    name="simple-controlled"
                    value={feelingVal}
                    onChange={(event, newValue) => {
                        setFeelingVal(newValue);
                    }}
                    />
                </Box>
                < NextButton/>
            </form>
        </>
    )
}

export default Feeling;