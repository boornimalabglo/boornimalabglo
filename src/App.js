
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Usertable from './usertable';
import PeopleRecord from './PeopleRecords';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
            path='/'
            element={<Usertable />}
          />
          <Route
            path='/:name'
            element={<PeopleRecord />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
