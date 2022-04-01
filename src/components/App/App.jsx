import React from 'react';
import axios from 'axios';
import './App.css';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      < Feeling/>
      < Understanding/>
      < Support/>
      < Comments/>
      < Review/>
      < SubmissionSuccess/>
      < Admin/>
    </div>
  );
}

export default App;
