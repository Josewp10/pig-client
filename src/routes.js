import Profile from "../src/views/pages/Profile.js";
import Medicamentos from "../src/views/pages/Medicamentos.js";
import Register from "../src/views/pages/Register.js";
import Login from "../src/views/pages/Login.js";
import Bovinos from "../src/views/pages/Bovinos.js";
import Tareas from "../src/views/pages/Tareasl.js";
import Termos from "../src/views/pages/Termos.js";


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
    path: "/tables",
    name: "Control de Retiro",
    icon: "ni ni-fat-add text-red",
    component: Bovinos,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Control de Tratamientos",
    icon: "ni ni-sound-wave text-orange",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Control de Celo",
    icon: "ni ni-calendar-grid-58 text-brown",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/tables",
    name: "Control de Partos",
    icon: "ni ni-fat-add text-purple",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/tables",
    name: "Control de Preñez",
    icon: "ni ni-collection text-red",
    component: Register,
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
    path: "/perfil",
    component: Profile,
    layout: "/admin",
  },
];
export default routes;
