export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHTML() {
        return "";
    }

    async getData() {
        try {
            const response = await fetch("http://localhost:8000/posts/api");
            const posts = await response.json();
            return posts;
        } catch (error) {
            return error.message
        }
    }
}