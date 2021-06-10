import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Ma Liste");
    }

    async getHtml() {
        return `
        <h1>Ma Liste</h1>
        <p>
           
        </p>
    `;

    }
}