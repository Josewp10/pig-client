
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../src/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/assets/scss/argon-dashboard-react.scss";

import AdminLayout from "../src/layouts/Admin.js";
import AuthLayout from "../src/layouts/Auth.js";
import TernerasDestetadas from "../src/views/pages/TernerasDestetadas.js";
import TernerasLevante from "../src/views/pages/TernerasLevante.js";
import Novillonas from "../src/views/pages/Novillonas.js";
import VacasLactantes from "../src/views/pages/VacasLactantes.js";
import VacasOrras from "../src/views/pages/VacasOrras.js";
import Toros from "../src/views/pages/Toros.js";
import Termos from "../src/views/pages/Termos.js";
import Terneros from "../src/views/pages/Terneros.js";
import insertarTerneras from "../src/views/pages/insertarTerneras.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path='/terneros' component={Terneros} />
      <Route path='/terneras' component={TernerasLevante} />
      <Route path='/ternerasdestetadas' component={TernerasDestetadas} />
      <Route path='/novillonas' component={Novillonas} />
      <Route path='/vacaslactantes' component={VacasLactantes} />
      <Route path='/vacasorras' component={VacasOrras} />
      <Route path='/toros' component={Toros}/>
      <Route path='/termos' component={Termos} />
      <Route path='/insertarTerneras' component={insertarTerneras} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
