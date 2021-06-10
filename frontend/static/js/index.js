import Accueil from './views/Accueil.js';
import Circuits from './views/Circuits.js';
import Commencer from './views/Commencer.js';
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Roulette from './views/Roulette.js';
import Settings from './views/Settings.js';
import Profil from './views/Profil.js';
import Voyage from './views/Voyage.js';
import Liste from './views/Liste.js';
import AjoutBillets from './views/AjoutBillets.js';
import Inscription from './views/Inscription.js';
import Connexion from './views/Connexion.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async() => {
    const routes = [
        { path: '/', view: Accueil },
        { path: '/commencer', view: Commencer },
        { path: '/circuits', view: Circuits },
        { path: '/roulette', view: Roulette },
        { path: '/dashboard', view: Dashboard },
        { path: '/posts', view: Posts },
        { path: '/settings', view: Settings },
        { path: '/profil', view: Profil },
        { path: '/voyage', view: Voyage },
        { path: '/liste', view: Liste },
        { path: '/billets', view: AjoutBillets },
        { path: '/inscription', view: Inscription },
        { path: '/connexion', view: Connexion }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    router();
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
});