import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import PatientInfo from './PatientInfo';

const NoMatch = () => <h1>404</h1>;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={SearchPage} />
        <Route exact path={`/patient/:patient_id`} component={PatientInfo} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
