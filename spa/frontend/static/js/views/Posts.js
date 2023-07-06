import AbsatrctView from './AbstractView.js';

export default class Posts extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
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
        } else {

            return `
                <h1>All Posts</h1>
                <section>
                    <ul>`+
                    posts.map(post => ( 
                        `<li>                    
                            <a href="/posts/${post.id}" data-link>${post.title}</a>
                        </li>` 
                    )) +
                    `</ul>
                </section>
                <p>
                    
                </p>
            `;
        }


    }
}

