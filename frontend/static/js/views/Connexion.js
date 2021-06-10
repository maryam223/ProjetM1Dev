import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Connexion");
    }

    async getHtml() {
        return `
        <form action="/dashboard">
    <div class="container">
        <h1>Connexion</h1>
        <p>Où allons-nous cette fois-ci ?</p>
        <hr>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Votre adresse mail" name="email" id="email" required>
        <br>
        <label for="password"><b>Mot de Passe</b></label>
        <input type="password" placeholder="Entrez votre mot de passe" name="password" id="password" required>
        <hr>
        <br>
        <button type="submit" class="registerbtn">Se Connecter</button>
    </div>

    <div class="container signin">
        <p>Vous n'avez pas encore de compte ? <a href="/inscription">Inscrivez-vous</a>.</p>
    </div>
</form>
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