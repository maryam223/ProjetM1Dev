import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Accueil");
    }

    async getHtml() {
        return `
       <div id="logo">
        <img src="static/img/horizons_logo.png" alt="logo" width="128px">
       </div> 
        <div id="menu">
        <a href="/commencer" class="" data-link>Commencer</a>
        <a href="/circuits" class="" data-link>Circuits</a>
        <a href="/roulette" class="" data-link>Roulette</a>
        </div>
        <div id="compte">
        <a href="/connexion" id="btn_connexion" class="" data-link>Connexion</a>
        <a href="/inscription" id="btn_inscription" class="" data-link>Inscription</a>
        </div>
        <h1>Organisez votre voyage<br> du bout des doigts</h1>

        <style>
            body{
                background-image: url("https://images.unsplash.com/photo-1499591934245-40b55745b905?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80");
                background-repeat: no-repeat;
                background-size: 100vw 100vh;
            }

            h1{
                color: white;
                font-family: 'Satisfy', cursive;
                font-size: 56px;
                margin-top: 29%;
                margin-left: 50%;
            }

            .nav{
                display : none;
            }
        </style>
    `;

    }
}