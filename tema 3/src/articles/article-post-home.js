import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"


class ArticlePostHome extends LitElement {
    static get styles() {
        return css `
        
        picture img {
            width: 300px;
        }
        
        .article-body {
            padding: 5%;
            box-sizing: border-box;
        }
        

        @media screen and (min-width:600px) {
            picture img {
                width: 500px;
            }
        }
        
        @media screen and (min-width:1600px) {
            picture img {
                width: 1000px;
                float: right;
            }
        }
        `;
    }

    static get properties() {
        return {
            imageOptions: { type: String },
            title: { type: String },
            subtitle: { type: String },
            description: { type: String },
            flexDirection: { type: String }
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
            <h3>
                ${this.subtitle}
            </h3>
            <p>
                ${this.description}
            </p>
        </div>
        `;
    }


}

export default customElements.define('article-post-home', ArticlePostHome)