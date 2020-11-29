import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

import "./navbar-item.js"

class Header extends LitElement {
    static get styles() {
        return css `
        .nav-bar {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        
        header {
            background-color: var(--main-background-color);
            text-align: center;
            padding-bottom: 100px;
        }
        
        header h1 {
            color: var(--main-background-secondary-color);
        }
        
        @media screen and (min-width:1080px) {
            .nav-bar {
                flex-direction: row;
                justify-content: center;
            }
        }
        `;
    }

    static get properties() {
        return {
            navBarOptions: { type: Array }
        }
    }

    constructor() {
        super()

        this.navBarOptions = [{
                innerHtml: html `<a href="index.html">Home</a>`
            },
            {
                innerHtml: html `<a href="destinations.html">Destinations</a>`
            },
            {
                innerHtml: html `<a href="">Language</a>`
            }
        ]
    }

    render() {
            return html `
        <header>
            <nav>
                <ul class="nav-bar">
                    ${this.navBarOptions.map( item => html`
                    <navbar-item .innerHtml = ${item.innerHtml}></navbar-item>
                    `)}
                </ul>
            </nav>
            <h1>Travel far and wide!</h1>
        </header>
        `;
    }
}

customElements.define('app-header', Header)