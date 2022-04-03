import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UserInput() {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');

    
    return (
        <form onSubmit={handleUserInput}>    
            <input 
            required 
            placeholder={feelingState ? feelingState : 'Choose 1-5'} 
            value={feelingVal}
            onChange={(event) => setFeelingVal(event.target.value)}
            />
        </form>

    )
}

export default UserInput;