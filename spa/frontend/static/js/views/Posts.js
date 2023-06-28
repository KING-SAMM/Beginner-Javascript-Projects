import AbsatrctView from './AbstractView.js';

export default class Posts extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHTML() {
        return `
            <h1>All Posts</h1>
            <section>
                <ul>
                    <li>                    
                        <a href="/posts/1" data-link>JavaScript Objects</a>
                    </li>
                    <li>
                        <a href="/posts/2" data-link>How to use Object.entries</a>
                    </li>
                    <li>
                        <a href="/posts/3" data-link>Why Knowing Arrays and Objects is the Key to Becomming a Great Software Engineer</a>
                    </li>
                    <li>
                        <a href="/posts/4" data-link>Data Structures and Algorithms for Dummies</a>
                    </li>
                </ul>
            </section>
            <p>
                
            </p>
        `;
    }
}

