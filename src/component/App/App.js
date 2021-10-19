import "../App/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "../Nav/Nav.js";
import TvShows from '../Router/TvShows'
import Movies from '../Router/Movies'
import NewPopular from '../Router/NewPopular'
import MyList from '../Router/MyList'
import WhatchAgain from '../Router/WhatchAgain'
import Home from '../Home/Home'

 
import List from '../List/List'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Home />
        <List />
        <List />
        <List />

        <Switch>
          <Route path="/tv-shows">
            <TvShows/>
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
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
