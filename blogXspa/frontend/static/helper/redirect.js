import Posts from "../js/views/Posts.js";
import SinglePost from "../js/views/SinglePost.js";

export function backToPosts() {
    setTimeout(async () => {
        window.history.pushState(null, null, "/posts");
        const posts = new Posts();
        console.log(await posts.getHTML());
        document.querySelector("#app").innerHTML = await posts.getHTML();
    }, 500);
}

export function fromUpdateToSingle() {
    setTimeout(async () => {
        const pathname = window.location.pathname;
        // Isolate the post id 
        const id = pathname.split("/").pop();

        // Create link similar to one on All Posts view
        const readMore = document.createElement("a");
        readMore.setAttribute("id", "readMore");
        readMore.setAttribute("href", `/posts/${id}`);
        readMore.setAttribute("data-link", "");
        readMore.className = "btn btn-info test-primary w-25"
        readMore.appendChild(document.createTextNode("Read More"));
        const EditPost = document.getElementById("edit-post")
        EditPost.appendChild(readMore);

        // Create a new click event
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });

        // Dispatch the click event on the readMore
        readMore?.dispatchEvent(clickEvent);
    }, 500);
}