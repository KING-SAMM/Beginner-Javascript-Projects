import AbsatrctView from './AbstractView.js';

export default class SinglePost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle(`Post ${this.params.id}`);
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
        }

        const singlePost = posts.find(post => post.id == this.params.id)

        this.setTitle(singlePost.title);

        return `
            <h1>${singlePost.title}</h1>

            <!-- Delete Modal -->
            <div class="modal fade" id="deleteModalCenter" tabindex="-1" role="dialog" aria-labelledby="deleteModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLongTitle">This post will be deleted</h5>
                            <div class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="text-dark">&times;</span>
                            </div>
                        </div>
                        <div class="modal-body">
                            Click OK to delete this post permanently. Note that this action cannot be reversed.
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="deletePost" class="btn btn-danger" onclick="deletePost(${singlePost.id})" data-bs-dismiss="modal">OK</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page Content -->
            <section>
                <div class="container">
                    <div class="info">
                        <span id="del-msg-success" class="text-secondary"></span>
                        <span id="del-msg-error" class="text-danger"></span>
                        <div class="p-4">    
                            <img src="${singlePost.imageUrl}" alt="${singlePost.title}" title="${singlePost.title}"" />

                            <p style="font-size: 16px;">By: ${singlePost.author} | ${singlePost.category_name}</p>
                        
                            <p style="font-size: 20px;">${singlePost.body}</p>

                            <a type="button" id="editPost" name="editPost"  class="btn btn-primary" href="/edit/${singlePost.id}" data-link>Edit</a>
                            <a type="button" name="delete" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModalCenter">Delete</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}


