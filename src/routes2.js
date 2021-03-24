import TernerasLevante from "../src/views/pages/TernerasLevante.js"
import TernerasDestetadas from "../src/views/pages/TernerasDestetadas.js";
import Novillonas from "../src/views/pages/Novillonas.js";
import VacasLactantes from "../src/views/pages/VacasLactantes.js";
import VacasOrras from "../src/views/pages/VacasOrras.js";
import Terneros from "../src/views/pages/Terneros.js";
import Toros from "../src/views/pages/Toros.js";
import Termos from "../src/views/pages/Termos.js";
import insertarBovino from "../src/views/pages/insertarTerneras.js";
import actualizarBovino from "./views/pages/actualizarBovino.js";
import Profile from "../src/views/pages/Profile.js";
import insertarMedicamentos from "./views/pages/insertarMedicamentos.js";
import actualizarMedicamento from "./views/pages/actualizarMedicamentos.js";
import genealogico from "./views/pages/genealogicos.js";
import insertarGenealogicos from "./views/pages/insertarGenealogicos.js";

var routes2 = [
    {
        path: "/insertarBovino",
        name: "InsertarBovino",
        component: insertarBovino,
        layout: "/admin",
    },
    {
        path: "/verGenealogia",
        name: "Genealogia",
        component: genealogico,
        layout: "/admin",
    },
    {
        path: "/insertarMedicamentos",
        name: "InsertarMedicamentos",
        component: insertarMedicamentos,
        layout: "/admin",
    },
    {
        path: "/insertarGenealogia",
        name: "InsertarGenealogia",
        component: insertarGenealogicos,
        layout: "/admin",
    },
    {
        path: "/actualizarMedicamento",
        name: "ActualizarMedicamento",
        component: actualizarMedicamento,
        layout: "/admin",
    },
    {
        path: "/actualizarBovino",
        name: "ActualizarBovino",
        component: actualizarBovino,
        layout: "/admin",
    },
    {
        path: "/TernerasLevante",
        name: "TernerasLevante",
        component: TernerasLevante,
        layout: "/admin",
    },
    {
        path: "/TernerasDestetadas",
        name: "TernerasDestetadas",
        component: TernerasDestetadas,
        layout: "/admin",
    },
    {
        path: "/Novillonas",
        name: "Novillonas",
        component: Novillonas,
        layout: "/admin",
    },
    {
        path: "/VacasLactantes",
        name: "VacasLactantes",
        component: VacasLactantes,
        layout: "/admin",
    },
    {
        path: "/VacasOrras",
        name: "VacasOrras",
        component: VacasOrras,
        layout: "/admin",
    },
    {
        path: "/Terneros",
        name: "Terneros",
        component: Terneros,
        layout: "/admin",
    },
    {
        path: "/Toros",
        name: "Toros",
        component: Toros,
        layout: "/admin",
    },
    {
        path: "/Termos",
        name: "Termos",
        component: Termos,
        layout: "/admin",
    },
    {
        path: "/perfil",
        component: Profile,
        layout: "/admin",
      },

];
export default routes2;
