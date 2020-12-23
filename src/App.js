import {Container, Link} from '@material-ui/core'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Converter from './pages/converter/Converter'
import Main from './pages/main/Main'
import BaseCurrency from './BaseCurrency'
import './App.css';

function App() {
  return (
    <Container className="app">
      <Router>

        <header>
          <nav>
            <Link className="nav-link" component={NavLink} to='/'>Курсы валют</Link>
            <Link className="nav-link" component={NavLink} to='/converter'>Конвертор</Link>
          </nav>
          <BaseCurrency />
        </header>

        <main>
          <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path='/converter'>
                <Converter />
              </Route>
          </Switch>
        </main>

    </Router>
  </Container>
  );
}

export default App;
