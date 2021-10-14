import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Nav.js";
import TvShows from '../component/TvShows'
import Home from '../component/Home'
import Movies from '../component/Movies'
import MyList from '../component/MyList'
import NewPopular from '../component/NewPopular'
import WhatchAgain from '../component/WhatchAgain'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/tv-shows">
            <TvShows />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/new-and-popular">
            <NewPopular />
          </Route>
          <Route path="/my-list">
            <MyList />
          </Route>
          <Route path="/whatch-again">
            <WhatchAgain />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
