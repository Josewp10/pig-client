
import Medicamentos from "../src/views/pages/Medicamentos.js";
import Register from "../src/views/pages/Register.js";
import Login from "../src/views/pages/Login.js";
import Bovinos from "../src/views/pages/Bovinos.js";
import Tareas from "../src/views/pages/Tareasl.js";
import Termos from "../src/views/pages/Termos.js";
import controlRetiros from "../src/views/pages/controlRetiro.js";
import controlTratamientos from "../src/views/pages/controlTratamientos.js";
import controlCelo from "../src/views/pages/controlCelos.js";
import controlPartos from "../src/views/pages/controlPartos.js";
import Potreros from "../src/views/pages/Potreros.js";

var routes = [
  {
    path: "/Bovinos",
    name: "Bovinos",
    icon: "ni ni-world text-success",
    component: Bovinos,
    layout: "/admin",
  },
  {
    path: "/medicamentos",
    name: "Medicamentos",
    icon: "ni ni-briefcase-24 text-gray",
    component: Medicamentos,
    layout: "/admin",
  },
  {
    path: "/tareas",
    name: "Tareas",
    icon: "ni ni-book-bookmark text-yellow",
    component: Tareas,
    layout: "/admin",
  },
  {
    path: "/controlRetiros",
    name: "Control de Retiro",
    icon: "ni ni-fat-add text-red",
    component: controlRetiros,
    layout: "/admin",
  },
  {
    path: "/controlTratamientos",
    name: "Control de Tratamientos",
    icon: "ni ni-sound-wave text-orange",
    component:  controlTratamientos,
    layout: "/admin",
  },
  {
    path: "/controlCelo",
    name: "Control de Celo",
    icon: "ni ni-calendar-grid-58 text-brown",
    component: controlCelo,
    layout: "/admin",
  },
  {
    path: "/controlPartos",
    name: "Control de Partos",
    icon: "ni ni-fat-add text-purple",
    component: controlPartos,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Control de Preñez",
    icon: "ni ni-collection text-red",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-collection text-red",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/termos",
    name: "Termos",
    icon: "ni ni-basket text-red",
    component: Termos,
    layout: "/admin",
  },
  {
    path: "/potreros",
    name: "Potreros",
    icon: "ni ni-image text-success",
    component: Potreros,
    layout: "/admin",
  },
];
export default routes;
