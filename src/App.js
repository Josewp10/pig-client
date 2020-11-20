import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Home from './pages/Home';
import ControlRetiros from './pages/ControlRetiros';
import ControlCelo from './pages/controlCelo';
import Tareas from './pages/Tareas';
import ControlTratamientos from './pages/controlTratamientos';
import Login from './pages/Login';
import insertarControlTratamientos from './pages/insertarControlTratamientos';
import insertarControlRetiro from './pages/insertarControlRetiro';
import insertarTareas from './pages/insertarTareas';
import insertarCelo from './pages/insertarCelo';

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
          <Route path='/Tareas' component={Tareas} />
          <Route path='/insertarControlTratamientos' component={insertarControlTratamientos} />
          <Route path='/actualizar/:id' component={insertarControlTratamientos} />
          <Route path='/insertarControlRetiro' component={insertarControlRetiro} />
          <Route path='/actualizarControlRetiro/:id' component={insertarControlRetiro} />
          <Route path='/insertarTareas' component={insertarTareas} />
          <Route path='/actualizarTareas/:id' component={insertarTareas} />
          <Route path='/insertarCelo' component={insertarCelo} />
          <Route path='/actualizarCelo/:id' component={insertarCelo} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
