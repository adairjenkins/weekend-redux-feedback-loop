import { useHistory } from 'react-router-dom';

function Comments() {
    const history = useHistory(); 

    return (
        <>
            <h3>COMMENTS COMPONENT</h3>
            <button onClick={() => history.push('/review')}>NEXT</button>
        </>
    )
}

export default Comments;