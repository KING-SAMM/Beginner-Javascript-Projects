import Posts from "../js/views/Posts.js";

export function fromDeleteToPosts() {
    setTimeout(async () => {
        window.history.pushState(null, null, "/posts");
        const posts = new Posts();
        console.log(await posts.getHTML());
        document.querySelector("#app").innerHTML = await posts.getHTML();
    }, 500);
}

export function fromUpdateToSingle() {
    setTimeout(async () => {
        const currentPathname = window.location.pathname;
        // Isolate the post id 
        const id = currentPathname.split("/").pop();
        // Modify the pathname
        const modifiedPathname = currentPathname.replace('/edit', '/posts');
        // Assign the modified pathname back to window.location.pathname
        window.location.pathname = modifiedPathname;
        // redirect back to single post
        window.history.pushState(null, null, window.location.pathname);
        const post = new SinglePost(id);
        console.log(await post.getHTML());
        document.querySelector("#app").innerHTML = await post.getHTML();
    }, 500);
}