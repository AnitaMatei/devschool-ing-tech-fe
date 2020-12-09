import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

import "./article-post-home.js"

class ArticleSectionHome extends LitElement {
    static get styles() {
        return css `
        .article-post {
            display: flex;
            flex-direction: column;
            align-items: center;
        }  
        
        .article-post {
            background-color: var(--article-background-color);
        }
        
        .section-title {
            background-color: var(--main-background-color);
            padding: 15px;
            text-align: center;
        }

        .section-title h2 {
            color: var(--main-background-secondary-color);
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
        
        button:hover {
            background-color: var(--main-background-fade-color);
        
        }

        @media screen and (min-width:1600px) {
            .article-post {
                display: flex;
                flex-direction: row;
            }
            .article-post:nth-child(odd) {
                flex-direction: row-reverse;
            }
            button{
                margin: 50px auto 50px auto;
            }
        }
        `;
    }

    static get properties() {
        return {
            articlesContents: { type: Array },
            nrArticles: { type: Number }
        }
    }

    constructor() {
        super()
        this.nrArticles = 3
        this.articlesContents = []
    }

    render() {
            return html `
            <section>
                <div class="section-title">
                    <h2>Perks of travelling</h2>
                </div>
                ${this.articlesContents.map(item => html`
                    <article-post-home class="article-post" .imageOptions=${item.images} .title=${item.title} .subtitle=${item.subtitle} .description=${item.description}></article-post-home>
                `)}
                <button @click=${this.handleClickLoadMore}>Load more</button>
            </section>
            `;
    }

    connectedCallback(){
        super.connectedCallback()
        this.getArticlesContents()
    }

    //requests a "page" of article contents
    getArticlesContents(){
        const axios = window.axios
        const location = "https://devschool-2020.firebaseio.com/mateianita/articles.json"

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
                this.nrArticles=i
                this.articlesContents = newArticlesContents
            })
            .catch(error => console.log(error))

    }

    handleClickLoadMore(){
        this.nrArticles+=3
        this.getArticlesContents()
    }
}

customElements.define('article-section-home', ArticleSectionHome)