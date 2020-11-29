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
        
        @media screen and (min-width:1600px) {
            .article-post {
                flex-direction: row;
                align-items: unset;
            }
        }`;
    }

    static get properties() {
        return {
            articlesContents: { type: Array }
        }
    }

    constructor() {
        super()

        this.articlesContents = [{
                imageOptions: html `<source media="(min-width:900px)" srcset="https://picsum.photos/id/1048/5616/3744">
                <img src="https://picsum.photos/id/1054/3079/1733" alt="img health">`,
                title: `Hungary`,
                description: html `Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porttitor odio odio, ac laoreet est sagittis in. Nulla blandit odio turpis, et ultrices enim hendrerit sed. Suspendisse rutrum, mauris nec interdum condimentum,
            tortor nulla tristique nibh, in aliquet elit mauris ac mauris. Sed elementum, tellus luctus vestibulum vehicula, ex arcu efficitur purus, sed feugiat odio diam ac lorem. Ut erat nulla, pellentesque maximus arcu placerat, sollicitudin
            tincidunt magna. Morbi eget turpis vel libero accumsan elementum. Vivamus condimentum, ligula vel dapibus tempus, felis ex egestas eros, et laoreet orci mauris at tellus. Curabitur ullamcorper nisl quis justo posuere, id facilisis
            arcu consequat. Suspendisse potenti. Fusce a tempus dui. Nulla ornare feugiat felis vel dictum. Duis consequat commodo eleifend.`,
                moreDetails: html `<p>Find out more at <a href="http://hungary.com/">the official website.</a></p>`
            },
            {
                imageOptions: html `
                <source media="(min-width:900px)" srcset="https://picsum.photos/id/1044/4032/2268">
                <img src="https://picsum.photos/id/1045/3936/2624" alt="img health">`,
                title: `Austria`,
                description: html `Proin mollis ex a enim iaculis sollicitudin. Morbi posuere libero vitae nunc convallis aliquam. Suspendisse vel neque ante. Vivamus tincidunt justo leo. Nam non sodales risus. Ut ullamcorper finibus massa. Proin euismod erat sit amet
                nibh laoreet volutpat. Nunc et justo vehicula, gravida erat eget, porta eros. Etiam ultricies nisl eget elementum rhoncus. Etiam at dictum tortor. Fusce congue turpis eget odio viverra, quis pulvinar ante cursus. Quisque semper
                sagittis lacinia. Maecenas tincidunt ex fringilla mauris maximus pretium. Ut commodo elementum quam vel sodales. Suspendisse potenti.`,
                moreDetails: html `<p>Find out more at <a href="https://www.austria.info/en">the official website.</a></p>`
            },
            {
                imageOptions: html `
                <source media="(min-width:900px)" srcset="https://picsum.photos/id/1047/3264/2448">
                <img src="https://picsum.photos/id/1061/3264/2448" alt="img health">`,
                title: `Bulgaria`,
                description: html `Donec metus quam, elementum non velit at, dapibus semper risus. Mauris facilisis non libero quis cursus. Aliquam dapibus pulvinar velit vitae vulputate. Nulla ac erat eu lorem hendrerit pharetra. Proin tincidunt ac nulla in fringilla. Suspendisse cursus,
                sem non aliquet vehicula, nisl ligula porta ex, non suscipit ante sem in metus. Nulla facilisi. In hac habitasse platea dictumst. Proin eget arcu convallis, feugiat ex vel, egestas elit. Vestibulum eget euismod odio, nec rutrum
                diam. Nulla scelerisque mattis pretium.`,
                moreDetails: html `<p>Find out more at <a href="https://www.gov.uk/foreign-travel-advice/bulgaria">the official website.</a></p>`
            },
            {
                imageOptions: html `<source media="(min-width:900px)" srcset="https://picsum.photos/id/1083/5472/3648">
                <img src="https://picsum.photos/id/11/2500/1667" alt="img health">`,
                title: `France`,
                description: html `Aliquam aliquet, velit non blandit dictum, ligula elit lobortis quam, at accumsan dui sem condimentum ligula. Curabitur tempus, odio sit amet pellentesque tristique, tellus ante ullamcorper dui, nec tempus tortor sapien vitae justo. Mauris eu odio lectus.
                Praesent nec risus felis. Nam eget pharetra neque, at finibus tortor. Maecenas at odio volutpat augue molestie sodales. Vestibulum tempus, diam quis molestie mattis, justo odio suscipit nibh, ornare sodales nibh lacus non lectus.`,
                moreDetails: html `<p>Find out more at <a href="http://ee.france.fr/">the official website.</a></p>`
            },
            {
                imageOptions: html `
                <source media="(min-width:900px)" srcset="https://picsum.photos/id/1063/4867/3215">
                <img src="https://picsum.photos/id/1078/3000/2000" alt="img health">`,
                title: `Germany`,
                description: html `In eleifend porta ante, ornare rutrum quam euismod ut. Nam convallis tempor feugiat. Praesent vel erat enim. Suspendisse potenti. Ut egestas velit nec quam tristique condimentum. Aliquam erat volutpat. Nulla facilisis eu massa vitae
                tristique. Aliquam interdum odio ut urna viverra semper. Praesent fringilla tortor semper, laoreet libero in, tincidunt purus. Cras commodo elit eu nibh auctor, et luctus sem pretium.`,
                moreDetails: html `<p>Find out more at <a href="https://www.germany.travel/en/home.html">the official website.</a></p>`
            },
            {
                imageOptions: html `<source media="(min-width:900px)" srcset="https://picsum.photos/id/12/2500/1667">
                <img src="https://picsum.photos/id/133/2742/1828" alt="img health">`,
                title: `United Kingdom`,
                description: html `Fusce mi velit, tempor nec velit vitae, hendrerit porta leo. Donec vitae vulputate massa. Vestibulum lobortis, velit non consectetur auctor, metus nibh condimentum enim, eget suscipit est lorem non nulla. Phasellus auctor tempus dapibus.
                Duis eget odio commodo, tempor sapien eget, blandit quam. Sed sagittis erat ut arcu porta, viverra feugiat risus dictum. Duis condimentum ullamcorper lorem, sit amet bibendum sem laoreet non. Nulla congue sit amet quam cursus consectetur.`,
                moreDetails: html `<p>Find out more at <a href="https://www.gov.uk/foreign-travel-advice">the official website.</a></p>`
            }
        ]
    }

    render() {
            return html `
            <div class="section-title">
            <h2>Best destinations</h2>
        </div>
                ${this.articlesContents.map(item => html`
                    <article-post-destination class="article-post" .imageOptions=${item.imageOptions} .title=${item.title} .description=${item.description} .moreDetails=${item.moreDetails}></article-post-destination>
                `)}
            `;
    }
}

customElements.define('article-section-destination', ArticleSectionDestination)