import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StudentProvider } from './components/context/StudentContext';
import { SortProvider } from './components/context/SortContext';
import { AssignmentProvider } from './components/context/AssignmentContext';
import StudentOverview from './components/StudentOverview';
import Home from './components/Home';
import './css/App.scss'

const App = () => {
  return (
    <Router>
      <StudentProvider>
        <AssignmentProvider>
          <SortProvider>
            <div className="App">
              <Route
                exact path="/"
                component={Home}
              />
              <Route 
                path="/Student"
                component={StudentOverview}
                />
            </div>
            </SortProvider>
        </AssignmentProvider>
      </StudentProvider>
    </Router>
  );
}

export default App;
