import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import NextButton from '../NextButton/NextButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
            <Select
                    required={true}
                    value={supportVal}
                    onChange={(event) => {
                        setSupportVal(event.target.value);
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

export default Support;