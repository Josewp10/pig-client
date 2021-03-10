import Index from "../src/views/Index.js";
import Profile from "../src/views/examples/Profile.js";
import Medicamentos from "../src/views/examples/Medicamentos.js";
import Register from "../src/views/examples/Register.js";
import Login from "../src/views/examples/Login.js";
import Bovinos from "../src/views/examples/Bovinos.js";
import Icons from "../src/views/examples/Icons.js";
import * as SimpleIcons from 'react-icons/si'

var routes = [
  {
    path: "/index",
    name: "Inicio",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Bovinos",
    name: "Bovinos",
    icon: "ni ni-world text-success" ,
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
    path: "/user-profile",
    name: "Tareas",
    icon: "ni ni-book-bookmark text-yellow",
    component: Profile,
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
    path: "/tables",
    name: "Termos",
    icon: "ni ni-basket text-red",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/user-profile",
    name: "Usuario",
    icon: "ni ni-single-02 text-orange",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
