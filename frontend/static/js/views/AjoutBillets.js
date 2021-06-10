import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Ajout Billets");
    }

    async getHtml() {
        return `
        <h1>Mon voyage</h1>
        <form action="" method="post">
    <label for="depart">Ville de Départ</label>
    <input id="depart" type="text" name="depart">
    <br><br>
    <label for="arrival">Ville d'Arrivée</label>
    <input id="arrival" type="text" name="arrival">
    <br><br>
    <label for="billet_aller">Votre billet Aller</label><br>
    <input id="billet_aller" type="file" name="billet_aller">
    <br><br>
    <label for="billet_aller">Votre billet Retour</label><br>
    <input id="billet_aller" type="file" name="billet_aller">
    <br><br>
    <input type="submit" value="Enregistrer">
</form>
    
    `;

    }
}