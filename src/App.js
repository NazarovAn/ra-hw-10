import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Edit from './components/HW-10.1/Edit'
import Filter from './components/HW-10.2/Filter'
import Market from './components/HW-10.3/Market'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ Edit } />
          <Route path="/second" component={ Filter } />
          <Route path="/third" component={ Market } />
        </div>
      </div>
    </Router>
  );
}

export default App;
