import AbsatrctView from './AbstractView.js';
import SendFormData from '../../helper/SendFormData.js';

export default class CreatePost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Add New Post");
    }


    async getHTML() {
        // Give form time to load
        setTimeout(() => {
            SendFormData("POST", "http://blogx.local/api/post/create.php");
        }, 200);

        return `
        <h1>Add a Post</h1>
        <section>
            <div class="container mt-4 px-5">
                <div class="info">
                    <form id="create-form" class="form w-75">
                        <div class="form-group mt-2">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title" class="form-control"  required>
                        </div>
                        <div class="form-group mt-2">
                            <label for="body">Body</label>
                            <textarea type="text" id="body" rows="8" name="body" class="form-control" required></textarea>
                        </div>
                        <div class="form-group mt-2">
                            <label for="author">Author</label>
                            <input type="text" id="author" name="author" class="form-control" required>
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
                            <button type="submit" id="submit" name="submit" class="btn btn-primary form-control">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        `;
    }
}

