import OneToFiveInput from '../OneToFiveInput/OneToFiveInput';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const history = useHistory();

    return (
        <>
            <h3>UNDERSTANDING COMPONENT</h3>
            < OneToFiveInput/>
            <button onClick={() => history.push('/support')}>NEXT</button>
        </>
    )
}

export default Understanding;