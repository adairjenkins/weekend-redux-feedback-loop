import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <p><Link to='/feeling'>1. FEELING</Link></p>
            <p><Link to='/understanding'>2. UNDERSTANDING</Link></p>
            <p><Link to='/support'>3. SUPPORT</Link></p>
            <p><Link to='/comments'>4. COMMENTS</Link></p>
            <p><Link to='/review'>5. REVIEW</Link></p>
            <p><Link to='/submission-success'>6. SUBMISSION SUCCESS</Link></p>
            <p><Link to='/admin'>ADMIN</Link></p>
        </>
    )
}

export default Navigation;