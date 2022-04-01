import { useHistory } from 'react-router-dom';

function Support() {
    const history = useHistory();

    return (
        <>
            <h3>SUPPORT COMPONENT</h3>
            <button onClick={() => history.push('/comments')}>NEXT</button>
        </>
    )
}

export default Support;