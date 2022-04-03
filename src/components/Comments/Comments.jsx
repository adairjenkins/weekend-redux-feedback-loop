import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Comments() {
    const history = useHistory(); 
    const [commentsVal, setCommentsVal] = useState('');
    const dispatch = useDispatch();

    const commentsState = useSelector(store => store.feedbackReducer.comments);

    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('handleCommentsSubmit func');
        dispatch({type: 'ADD_COMMENTS', payload: commentsVal})
        history.push('/review')
    }

    const handleBackBtn = () => {
        history.push('/support');
    }

    return (
        <>
            <h3>COMMENTS COMPONENT</h3>
            <button onClick={handleBackBtn}>BACK</button>
            <form onSubmit={handleCommentsSubmit}>
                <input
                    placeholder={commentsState ? commentsState : 'Please add any additional feedback'} 
                    value={commentsVal}
                    onChange={(event) => setCommentsVal(event.target.value)}
                />
                <br/>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}

export default Comments;