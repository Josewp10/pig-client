import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './pages/Home';
import ControlRetiros from './pages/ControlRetiros';
import ControlCelo from './pages/controlCelo';
import ControlTratamientos from './pages/controlTratamientos';
import Login from './pages/Login';
import insertarControlTratamientos from './pages/insertarControlTratamientos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Login} />
         <Route path='/home' component={Home} />
          <Route path='/controlRetiros' component={ControlRetiros} />
          <Route path='/controlCelo' component={ControlCelo} />
          <Route path='/controlTratamientos' component={ControlTratamientos} />
          <Route path='/insertarControlTratamientos' component={insertarControlTratamientos} />
          <Route path='/actualizar/:id' component={insertarControlTratamientos} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
