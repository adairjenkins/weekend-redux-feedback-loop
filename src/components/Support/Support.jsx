import OneToFiveInput from '../OneToFiveInput/OneToFiveInput';
import { useHistory } from 'react-router-dom';

function Support() {
    const history = useHistory();

    return (
        <>
            <h3>SUPPORT COMPONENT</h3>
            < OneToFiveInput/>
            <button onClick={() => history.push('/comments')}>NEXT</button>
        </>
    )
}

export default Support;