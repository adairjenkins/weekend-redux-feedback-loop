import { Route, } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

function FeedbackForm() {

    return (
        <>
            <Route path='/feeling'>
            < Feeling/>
            </Route>
            <Route path='/understanding'>
            < Understanding/>
            </Route>
            <Route path='/support'>
            < Support/>
            </Route>
            <Route path='/comments'>
            < Comments/>
            </Route>
        </>
    )
}

export default FeedbackForm;