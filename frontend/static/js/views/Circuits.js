import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Circuits");
    }

    async getHtml() {
        return `
        <div id="banner-circuit">
        <h1>Trouvez votre circuit</h1>
        </div>
        <div id="listecircuits">
        <div class="location" style="--overlay-color: #12bfb7">
         <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1540254954904-74177f17c57b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /></div>
        <h2 class="title" data-cta="Ajouter à ma liste →">Gorges du Verdon</h2>
        </div>

        <div class="location" style="--overlay-color: #f52c72">
         <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1604311359310-c62704d11fb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /></div>
        <h2 class="title" data-cta="Ajouter à ma liste →">Musée de Gizeh</h2>
        </div>
        </div>

        <style>
            .nav{
                display: none;
            }

            body {
                --nav-width: unset;
            }

    
        </style>
    `;

    }
}