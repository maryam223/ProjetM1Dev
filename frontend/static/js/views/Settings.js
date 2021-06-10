import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Dashboard");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>
            You are viewing the settings !
        </p>
    `;

    }
}