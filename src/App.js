import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desktop from './Desktop';
import SigninPage from './pages.js/SignInPage'
import SignUpPage from './pages.js/SignUpPage'
import ContactPage from './pages.js/ContactPage'
import AboutPage from './pages.js/AboutPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Desktop />
        </Route>
        <Route exact path="/signin">
          <SigninPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
