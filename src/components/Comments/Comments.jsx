import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NextButton from '../NextButton/NextButton';
import BackButton from '../BackButton/BackButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Comments() {
    const history = useHistory(); 
    const [commentsVal, setCommentsVal] = useState('');
    const dispatch = useDispatch();

    const commentsState = useSelector(store => store.feedbackReducer.comments);

    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('handleCommentsSubmit func');
        // prevent navigating backward from erasing previous state unless the user enters new input
        if (commentsVal) {
            dispatch({type: 'ADD_COMMENTS', payload: commentsVal})
        } 
        history.push('/review')
        setCommentsVal('');
    }

    const handleBackBtn = () => {
        history.push('/support');
    }

    return (
        <>
            <BackButton handleBackBtn={handleBackBtn}/>
            <h3>Would you like to add any additional comments?</h3>
            <form onSubmit={handleCommentsSubmit}>
                 <TextField 
                    id="outlined-basic" 
                    label={commentsState ? commentsState : 'Feedback'} 
                    variant="outlined"
                    value={commentsVal}
                    onChange={(event) => setCommentsVal(event.target.value)}/>
                < NextButton/>
            </form>
        </>
    )
}

export default Comments;