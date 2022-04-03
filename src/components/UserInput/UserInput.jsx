import { useSelector } from 'react-redux';

function UserInput() {
    const feelingState = useSelector(store => store.feedbackReducer.feeling);
    
    return (
        <input 
        required 
        placeholder={feelingState ? feelingState : 'Choose 1-5'} 
        value={feelingVal}
        onChange={(event) => setFeelingVal(event.target.value)}
        />

    )
}

export default UserInput;