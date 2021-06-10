import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Mon Voyage");
    }

    async getHtml() {
        return `
        <h1>Mon voyage</h1>
        <p>
            Planning du voyage
        </p>
    
    `;

    }
}