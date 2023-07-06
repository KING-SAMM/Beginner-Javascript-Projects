import AbsatrctView from './AbstractView.js';

export default class Posts extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    
    async getHTML() {    
        const result = await this.getData();
        let posts = result.data;

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
                <section>`+
                    posts.map((post) => ( 
                        `<div class="card px-3 py-1" style="max-width: 600px; margin-left: 50px;">
            
                        <h4 class="card__clearfix pl-5">
                            ${post.id}.  ${post.title}
                        </h4>
                        <img src="${post.imageUrl}" alt="${post.title}" title="${post.title}" width="80" height="80"  margin-left: 10px;" />
                        
                        <a id="readMore" class="btn btn-info test-primary w-25" width="" href="/posts/${post.id}" data-link>Read More</a>
                    </div>` 
                    )) +
                    `
                    </section>
            `;
        }

    }
}

