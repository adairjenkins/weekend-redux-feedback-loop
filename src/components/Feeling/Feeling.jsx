import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserInput from '../UserInput/UserInput';


function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();

    const inputState = useSelector(store => store.inputReducer);
    
    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('handleFeelingSubmit func');
        dispatch({type: 'ADD_FEELING', payload: inputState})
        history.push('/understanding')
    }
 
    return (
        <>
            <h3>FEELING COMPONENT</h3>
            <form onSubmit={handleFeelingSubmit}>
                < UserInput/>
                <button type="submit">
                    NEXT
                </button>
            </form>
        </>
    )
}

export default Feeling;