import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Profil");
    }

    async getHtml() {
        return `
        <h1>Mon profil</h1>
        
        <div id="profildata">
        <img src="" alt="Photo de profil">
        <ul>
            <li><img src="static/img/personne.png" alt="icône"> Identité </li>
            <li><img src="static/img/pigeon.png" alt="icône"> Statut Voyageur</li>
            <li><img src="static/img/world.png" alt="icône"> Nombre de voyages réalisés</li>
            <li><img src="static/img/cake.png" alt="icône"> Date de naissance</li>
            <li><img src="static/img/email.png" alt="icône"> Adresse mail</li>
        </ul>
        </div>
    `;

    }
}