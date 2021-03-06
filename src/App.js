import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Navbar from './pages/navbar';
import Skills from './skills';
import Social from './pages/social_links';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Social />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/skills" exact component={Skills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
