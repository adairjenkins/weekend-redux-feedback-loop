import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
    const history = useHistory(); 
    const [commentsVal, setCommentsVal] = useState('');
    const dispatch = useDispatch();

    const handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('handleCommentsSubmit func');
        dispatch({type: 'ADD_COMMENTS', payload: commentsVal})
        history.push('/review')
    }

    return (
        <>
            <h3>COMMENTS COMPONENT</h3>
            <form onSubmit={handleCommentsSubmit}>
                <input 
                    required 
                    placeholder="Type something here" 
                    value={commentsVal}
                    onChange={(event) => setCommentsVal(event.target.value)}
                />
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Comments;