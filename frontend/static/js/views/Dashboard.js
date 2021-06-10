import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Dashboard");
    }

    async getHtml() {
        return `
        <h1>Prêt à voyager ?</h1>
        <p>
            Voici votre voyage :
        </p>
        <p>
            <a href="/voyage" data-link>Voir mon voyage</a>.
        </p>
    `;

    }
}