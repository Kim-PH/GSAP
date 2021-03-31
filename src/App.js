import {
  BrowserRouter as Router,
  Route,
  React
} from "react-router-dom";
import Nav from './components/Nav'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route path="/" exact>
					{ ({ match }) => <Home show={match !== null} /> }
				</Route>

        <Route path="/home">
          { ({ match }) => <Home show={match !== null} /> }
        </Route>
						
        <Route path="/about">
          { ({ match }) => <About show={match !== null} /> }
        </Route>

        <Route path="/contact">
          { ({ match }) => <Contact show={match !== null} /> }
				</Route>

        <Route path="/projects">
          { ({ match }) => <Projects show={match !== null} /> }
				</Route>
        
      </div>
    </Router>
  );
}

