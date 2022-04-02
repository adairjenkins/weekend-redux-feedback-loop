import { useHistory } from 'react-router-dom';

function Feeling() {
    const history = useHistory();
 
    return (
        <>
            <h3>FEELING COMPONENT</h3>
            <button onClick={() => history.push('/understanding')}>NEXT</button>
        </>
    )
}

export default Feeling;