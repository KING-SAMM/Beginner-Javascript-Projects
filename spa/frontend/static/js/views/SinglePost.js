import AbsatrctView from './AbstractView.js';

export default class SinglePost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle(`Post ${this.params.id}`);
    }

    async getHTML() {
        const posts = await this.getData();
        if (typeof(posts) === 'string' || typeof(posts) === null) {
            return `
                <h1>Oops!</h1>
                <section>
                    <h2>404</h2>
                    <p>Something went wrong</p>
                </section>
            `;
        }

        const singlePost = posts.find(post => post.id == this.params.id)

        return `
            <h1> ${singlePost.title}</h1>
            <section>
                <p>
                    ${singlePost.body}
                </p>
            </section>
        `;
    }
}


