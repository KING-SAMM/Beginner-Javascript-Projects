import AbsatrctView from './AbstractView.js';
import SendFormData from '../../helper/SendFormData.js';

export default class EditPost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Edit Post");
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
        
        const singlePost = posts.find(post => post.id == this.params.id);
        this.setTitle(`Edit ${singlePost.title}`);

        // Give form time to load
        setTimeout(() => {
            // Pre-select the current category
            const category = document.getElementById('category_id');
            category.value = singlePost.category_id;

            SendFormData("PUT", "http://blogx.local/api/post/update.php");
        }, 200);

        return `
        <h1>Edit ${singlePost.title}</h1>
        <section>
        <div class="container mt-4 px-5">
            <div class="info">
                <form id="edit-form" class="form w-75">
                    <div class="form-group mt-2">
                        <!--<label for="id">ID</label> -->
                        <input type="hidden" id="id" name="id" class="form-control" value="${singlePost.id}">
                    </div>
                    <div class="form-group mt-2">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" class="form-control" value="${singlePost.title}" required>
                    </div>
                    <div class="form-group mt-2">
                        <label for="body">Body</label>
                        <textarea type="text" id="body" rows="8" name="body" class="form-control" required>${singlePost.body}</textarea>
                    </div>
                    <div class="form-group mt-2">
                        <label for="author">Author</label>
                        <input type="text" id="author" name="author" class="form-control" value="${singlePost.author}" required>
                    </div>
                    <div class="form-group mt-2">
                        <label for="category_id">Category</label>
                        <select name="category_id" id="category_id" class="form-control">
                            <option value="1">Technology</option>
                            <option value="2">Gaming</option>
                            <option value="3">Auto</option>
                            <option value="4">Entertainment</option>
                            <option value="5">Books</option>
                        </select>
                    </div>
                    <div class="form-group mt-4 w-25">
                        <button type="submit" id="submit" name="submit" class="btn btn-primary form-control">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </section>
        `;
    }
    
}

