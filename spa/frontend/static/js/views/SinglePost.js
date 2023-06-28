import AbsatrctView from './AbstractView.js';

export default class Posts extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle(`Post ${this.params.id}`);
    }

    async getHTML() {
        return `
            <h1>Single Post ${this.params.id}</h1>
            <section>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex recusandae sequi eligendi possimus? Illo fuga laudantium iusto quis iste.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium nostrum totam expedita perferendis dolorem esse accusantium placeat exercitationem dolores rem, laborum atque vero voluptatem aliquid voluptate labore consequatur earum?
                </p>
            </section>
            <p>
                
            </p>
        `;
    }
}

