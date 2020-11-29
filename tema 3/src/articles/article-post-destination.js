import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"


class ArticlePostDestination extends LitElement {
    static get styles() {
        return css `
        .article-body {
            background-color: var( --article-background-color);
            padding-left: 5%;
            padding-right: 3%;
        }

        img {
            width: 300px;
        }

        @media screen and (min-width:750px) {
            img {
                width: 450px;
            }
        }
        `;
    }

    static get properties() {
        return {
            imageOptions: { type: String },
            title: { type: String },
            description: { type: String },
            moreDetails: { type: String }
        }
    }

    constructor() {
        super()
    }

    render() {
        return html `
        <picture>
            ${this.imageOptions}
        </picture>
        <div class="article-body">
            <h2>
                ${this.title}
            </h2>
            <p>
                ${this.description}
            </p>
            ${this.moreDetails}
        </div>
        `;
    }
}

export default customElements.define('article-post-destination', ArticlePostDestination)