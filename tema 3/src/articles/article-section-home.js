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
        
        @media screen and (min-width:1600px) {
            .article-post {
                display: flex;
                flex-direction: row;
            }
            .article-post:nth-child(odd) {
                flex-direction: row-reverse;
            }
        }
        `;
    }

    static get properties() {
        return {
            articlesContents: { type: Array }
        }
    }

    constructor() {
        super()

        this.articlesContents = [{
                imageOptions: html `
            <source media="(min-width:900px)" srcset="https://picsum.photos/id/1035/5854/3903">
            <source media="(min-width:600px)" srcset="https://picsum.photos/id/1018/3914/2935">
            <img src="https://picsum.photos/id/1044/4032/2268" alt="img health">`,
                title: `Healthier`,
                subtitle: `"Fresh air impoverishes the doctor"`,
                description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porttitor odio odio, ac laoreet est sagittis in. Nulla blandit odio turpis, et ultrices enim hendrerit sed. Suspendisse rutrum, mauris nec interdum condimentum,
            tortor nulla tristique nibh, in aliquet elit mauris ac mauris. Sed elementum, tellus luctus vestibulum vehicula, ex arcu efficitur purus, sed feugiat odio diam ac lorem. Ut erat nulla, pellentesque maximus arcu placerat, sollicitudin
            tincidunt magna. Morbi eget turpis vel libero accumsan elementum. Vivamus condimentum, ligula vel dapibus tempus, felis ex egestas eros, et laoreet orci mauris at tellus. Curabitur ullamcorper nisl quis justo posuere, id facilisis
            arcu consequat. Suspendisse potenti. Fusce a tempus dui. Nulla ornare feugiat felis vel dictum. Duis consequat commodo eleifend.`
            },
            {
                imageOptions: html `
            <source media="(min-width:900px)" srcset="https://picsum.photos/id/1025/4951/3301">
                    <source media="(min-width:600px)" srcset="https://picsum.photos/id/1037/5760/3840">
                    <img src="https://picsum.photos/id/1043/5184/3456" alt="img peace of mind">`,
                title: `Peaceful mind`,
                subtitle: `"Örül, mint majom a farkának"`,
                description: `Nunc vel ultricies eros. Sed ultricies nunc erat, vel auctor odio blandit sed. Nunc sed lectus eleifend, semper nisl laoreet, pellentesque justo. Sed nec condimentum lacus, at sodales leo. Vivamus ornare est ut placerat volutpat. Cras
                in arcu est. Fusce maximus, nisi quis commodo ultrices, massa justo pulvinar sem, non pharetra mauris ante vitae ante. Vestibulum eget commodo nibh. Vestibulum in tellus consectetur, ultricies nunc id, lacinia lorem. Donec scelerisque,
                justo ut gravida pretium, lorem mauris ultrices mauris, eu pellentesque nunc augue non diam. Etiam volutpat blandit ligula iaculis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;`
            },
            {
                imageOptions: html `
                <source media="(min-width:900px)" srcset="https://picsum.photos/id/1015/6000/4000">
                <source media="(min-width:600px)" srcset="https://picsum.photos/id/1018/3914/2935">
                <img src="https://picsum.photos/id/1025/4951/3301" alt="img smarter">`,
                title: `Smarter`,
                subtitle: `"A mind stretched by a new experience can never go back to its old dimensions."`,
                description: `Vestibulum ultrices sapien turpis, et faucibus nulla euismod in. Donec pharetra nisi ut metus condimentum tincidunt. Aliquam id imperdiet ante. Suspendisse sed blandit risus, in viverra elit. Nunc sed nulla id magna feugiat consectetur. Sed efficitur
                volutpat turpis, et malesuada elit mollis ac. Maecenas hendrerit orci quis feugiat molestie. Vivamus tempus eu sem mollis posuere. Ut vel lorem quis odio semper malesuada quis nec ante. Nunc ultrices iaculis fermentum. Mauris accumsan
                lacinia facilisis. Suspendisse sagittis imperdiet nibh, in vestibulum nisl convallis sed. Nullam pellentesque tincidunt dolor, ut finibus erat rhoncus quis. Donec sed quam nisl. Suspendisse tempor orci et ultrices ultricies. Fusce
                malesuada justo in tellus eleifend blandit.`
            }
        ]
    }

    render() {
            return html `
            <section>
                <div class="section-title">
                    <h2>Perks of travelling</h2>
                </div>
                ${this.articlesContents.map(item => html`
                    <article-post-home class="article-post" .imageOptions=${item.imageOptions} .title=${item.title} .subtitle=${item.subtitle} .description=${item.description}></article-post-home>
                `)}
            </section>
            `;
    }
}

customElements.define('article-section-home', ArticleSectionHome)