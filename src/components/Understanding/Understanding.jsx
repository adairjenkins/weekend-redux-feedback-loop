import { useHistory } from 'react-router-dom';

function Understanding() {
    const history = useHistory();

    return (
        <>
            <h3>UNDERSTANDING COMPONENT</h3>
            <button onClick={() => history.push('/support')}>BEGIN</button>
        </>
    )
}

export default Understanding;