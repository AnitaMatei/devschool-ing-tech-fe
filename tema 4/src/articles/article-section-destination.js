import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"


import "./article-post-destination.js"

class ArticleSectionDestination extends LitElement {
    static get styles() {
        return css `
        .section-title {
            text-align: center;
        }
        
        .section-title h2 {
            color: var(--main-background-color);
        }
        
        .article-post {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2% 10% 2% 10%;
        }

        button{
            border: 1px solid white;
            margin: 20px auto 20px auto;
            background-color: var(--main-background-color);
            color: white;
            display: block;
            padding: 10px 35px 10px 35px;
            transition: 0.3s;
        }
        
        @media screen and (min-width:1600px) {
            .article-post {
                flex-direction: row;
                align-items: unset;
            }
            button{
                margin: 10px auto 30px auto;
            }
        }`;
    }

    static get properties() {
        return {
            articlesContents: { type: Array },
            nrArticles: { type: Number }
        }
    }

    constructor() {
        super()
        this.nrArticles = 6
        this.articlesContents = []
    }

    render() {
            return html `
            <div class="section-title">
            <h2>Best destinations</h2>
        </div>
                ${this.articlesContents.map(item => html`
                    <article-post-destination class="article-post" .imageOptions=${item.images} .title=${item.title} .description=${item.description} .moreDetails=${item.moreDetails}></article-post-destination>
                `)}
                <button @click=${this.handleClickLoadMore}>Load more</button>
            `;
    }

    connectedCallback(){
        super.connectedCallback()
        this.getArticlesContents()
        
    }

    getArticlesContents(){
        const axios = window.axios
        const location = "https://devschool-2020.firebaseio.com/mateianita/destinations.json"

        let newArticlesContents = []

        axios.get(location)
            .then(response =>{
                let i = 0
                for (let key in response.data){
                    if(i>this.nrArticles-1){
                        break
                    }
                    newArticlesContents.push(response.data[key])
                    i++
                }
                this.nrArticles = i

                this.articlesContents = newArticlesContents
            })
            .catch(error => console.log(error))
    
    }

    handleClickLoadMore(){
        this.nrArticles+=6
        this.getArticlesContents()
    }
}

customElements.define('article-section-destination', ArticleSectionDestination)