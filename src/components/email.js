import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// import {createBrowserHistory} from 'history/createBrowserHistory';

import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

// const history = createBrowserHistory();

export default function Email(props) {
    if (window.location.pathname === "/") {
      window.location = "/inbox";
    }
    return (
      <Router>
        <div className="email">
            <Sidebar />
            <main>
              <Route exact path="/:folderId" component={EmailList}/>
              <Route exact path="/:folderId/:emailId" component={SingleEmail}/>

            </main>
        </div>
      </Router>
    );
}
