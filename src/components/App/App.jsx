import React from 'react';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import './App.css';
import Start from  '../Start/Start';
import Form from '../FeedbackForm/FeedbackForm';
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
        <Route path='/' exact>
          < Start/>
        </Route>
        < Form/>
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
