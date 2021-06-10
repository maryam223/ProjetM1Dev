import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Horizons - Commencer");
    }

    async getHtml() {
        return `
        <div id="banner-start">
            <h1>Commncez votre planification ici</h1>
        </div>
        <p>
            Des idées de destinations ? De lieux à découvrir ? De bons plans ?<br>
            Notez tout ici !
        </p>

        <div id="blocnotes">
        <ul>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #1</h2>
            <p>Exposition d'art Paris</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Girl's Trip</h2>
            <p>Semaine aux Maldives</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #3</h2>
            <p>Contenu #3</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #4</h2>
            <p>Contenu #4</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #5</h2>
            <p>Contenu #5</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #6</h2>
            <p>Contenu #6</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #7</h2>
            <p>Contenu #7</p>
          </a>
        </li>
        <li>
          <a href="#" contenteditable>
            <h2>Titre #8</h2>
            <p>Contenu #8</p>
          </a>
        </li>
      </ul>

        </div>

        <style>
        body {
            --nav-width: unset;
        }
            .nav{
                display: none;
            }

            p {
                margin-top: 20%;
                display: grid;
                place-items: center;
            }
        </style>
    `;

    }
}