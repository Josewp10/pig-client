import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './pages/Home';
import ControlRetiros from './pages/ControlRetiros';
import ControlCelo from './pages/controlCelo';
import ControlTratamientos from './pages/controlTratamientos';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/controlRetiros' component={ControlRetiros} />
          <Route path='/controlCelo' component={ControlCelo} />
          <Route path='/controlTratamientos' component={ControlTratamientos} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
