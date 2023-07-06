import AbsatrctView from './AbstractView.js';

export default class CreatePost extends AbsatrctView {
    constructor(params) {
        super(params);
        this.setTitle("Add New Post");
    }

    async getHTML() {
        return `
        <div class="container mt-4 px-5">
            <h1 class="display-4 text-center">
                <i class="fas fa-book-open text-info"></i>
                <span class="text-info">Add New Post</span>
            </h1>

            <form id="book-form">
                <div class="form-group mb-2">
                    <label for="id">ID</label>
                    <input type="text" id="id" class="form-control">
                </div>
                <div class="form-group mb-2">
                    <label for="title">Title</label>
                    <input type="text" id="title" class="form-control">
                </div>
                <div class="form-group mb-2">
                    <label for="body">Body</label>
                    <input type="text" id="body" class="form-control">
                </div>

                <input type="submit" value="Add Post" class="btn btn-primary btn-block">
            </form>

            <table class="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="book-list">

                </tbody>
            </table>
        </div>
        `;
    }
}

