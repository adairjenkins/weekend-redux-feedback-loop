import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Navigation from '../Navigation/Navigation';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
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
        <Route path='/review'>
          < Review/>
        </Route>
        <Route path='/submission-success'>
          < SubmissionSuccess/>
        </Route>
        <Route path='/admin'>
          < Admin/>
        </Route>
        <Route path='/nav'>
          < Navigation/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
