import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoGames from "./pages/videoGames"
import Contact from "./pages/contact"
import { createBrowserHistory } from "history";

import './App.css';


function App() {

  let history = createBrowserHistory();
  const [state, setState] = useState({ videoGames: true, contact: false })

  console.log(state)
  return (
    <Router>
      <Container>
        <Row className="my-5 pt-4">
          <Col>
            <Link to="/videoGames" className="navlink heading_button_label_text" onClick={() => setState({ videoGames: true, contact: false })} >
              VIDEO GAMES
                <span className={history.location.pathname == "/videoGames" || state.videoGames ? "d-block" : "d-none"}>VIDEO GAMES</span>
            </Link>
            <Link to="/contact" className="navlink heading_button_label_text" onClick={() => setState({ videoGames: false, contact: true })}>
              CONTACT
                <span className={history.location.pathname == "/contact" || state.contact ? "d-block" : "d-none"}>CONTACT</span>
            </Link>
          </Col>
        </Row>
        <div className="mt-5">
          <Switch>
            <Route exact path="/">
              <Redirect to="/videoGames" />
            </Route>
            <Route path="/videoGames">
              <VideoGames />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Container>

    </Router>
  );
}

export default App;
