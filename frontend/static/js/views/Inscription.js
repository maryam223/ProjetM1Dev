import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Inscription");
    }

    async getHtml() {
        return `
        <form action="/dashboard">
    <div class="container">
        <h1>Inscription</h1>
        <p>Le début de belles aventures.</p>
        <hr>

        <label for="nom"><b>Nom</b></label>
        <input type="text" placeholder="Votre nom" name="nom" id="nom" required>
        <br>
        <label for="prenom"><b>Prénom</b></label>
        <input type="text" placeholder="Votre prénom" name="prenom" id="prenom" required>
        <br>
        <label for="voyagecount"><b>Nombre voyage réalisés</b></label>
        <input type="number" placeholder="Quel type de GlobeTrotter êtes-vous ?" name="voyagecount" id="voyagecount" min="0">
        <br>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Votre adresse mail" name="email" id="email" required>
        <br>
        <label for="password"><b>Mot de Passe</b></label>
        <input type="password" placeholder="Entrez votre mot de passe" name="password" id="password" required>
        <br>
        <label for="password-repeat"><b>Répéter votre Mot de Passe</b></label>
        <input type="password" placeholder="Taper de nouveau votre mot de passe" name="password-repeat" id="password-repeat" required>
        <hr>
        <br>
        <button type="submit" class="registerbtn">S'inscrire</button>
    </div>

    <div class="container signin">
        <p>Vous avez déjà un compte ? <a href="/connexion">Connectez-vous</a>.</p>
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