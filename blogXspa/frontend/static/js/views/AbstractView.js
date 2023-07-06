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
            const response = await fetch("http://blogx.local/api/post/read.php");
            const posts = await response.json();
            return posts;
        } catch (error) {
            return error.message
        }
    }
}