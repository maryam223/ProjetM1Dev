import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - La Roulette");
    }

    async getHtml() {
        return `
        <h1>Tourner la roulette pour trouver une destination ou un lieu au hasard !</h1>
        <p>
            
        </p>

        <style>
            .nav{
                display: none;
            }
        </style>
    `;

    }
}