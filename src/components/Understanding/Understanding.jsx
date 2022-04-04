import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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
            <BackButton handleBackBtn={handleBackBtn}/>
            <h3>How well are you understanding the content?</h3>
            <form onSubmit={handleUnderstandingSubmit}>
            <Select
                    required={true}
                    value={understandingVal}
                    onChange={(event) => {
                        setUnderstandingVal(event.target.value);
                    }}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                <NextButton/>
            </form>
        </>
    )
}

export default Understanding;