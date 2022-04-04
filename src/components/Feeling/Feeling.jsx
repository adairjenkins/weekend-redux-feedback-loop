import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



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
            <form onSubmit={handleFeelingSubmit} aria-required="true"> 
                <Select
                    required={true}
                    value={feelingVal}
                    onChange={(event) => {
                        setFeelingVal(event.target.value);
                    }}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                < NextButton/>
            </form>
        </>
    )
}

export default Feeling;