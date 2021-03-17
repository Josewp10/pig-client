import TernerasLevante from "../src/views/pages/TernerasLevante.js"
import TernerasDestetadas from "../src/views/pages/TernerasDestetadas.js";
import Novillonas from "../src/views/pages/Novillonas.js";
import VacasLactantes from "../src/views/pages/VacasLactantes.js";
import VacasOrras from "../src/views/pages/VacasOrras.js";
import Terneros from "../src/views/pages/Terneros.js";
import Toros from "../src/views/pages/Toros.js";
import Termos from "../src/views/pages/Termos.js";


var routes2 = [
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

];
export default routes2;
