import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

class NavbarItem extends LitElement {
    static get styles() {
        return css `
        li {
            border: 1px solid white;
            margin: 5px;
            background-color: var(--main-background-color);
            transition: 0.3s;
        }
        
        li:hover {
            background-color: var(--main-background-fade-color);
        }
        
        li a {
            text-decoration: none;
            color: white;
            display: block;
            padding: 10px 35px 10px 35px;
        }

        @media screen and (min-width:1080px) {
            li {
                margin: 45px;
            }
        }`
    }

    static get properties() {
        return {
            innerHtml: { type: String }
        }
    }

    constructor() {
        super()
    }

    render() {
        return html `<li>${this.innerHtml}</li>`
    }

}

export default customElements.define('navbar-item', NavbarItem)