import Posts from "../js/views/Posts.js";

export function backToPosts() {
    setTimeout(async () => {
        // Change url to '/posts' and load the view
        window.history.pushState(null, null, "/posts");
        const posts = new Posts();
        document.querySelector("#app").innerHTML = await posts.getHTML();
    }, 400);
}

export function fromUpdateToSingle() {
    setTimeout(async () => {
        // Isolate the post id from current url
        const pathname = window.location.pathname;
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
    }, 400);
}


export function fromSingleToPosts() {
    setTimeout(async () => {
        // Isolate the post id from current url
        const pathname = window.location.pathname;
        const id = pathname.split("/").pop();

        // Change url to '/posts' and load the view
        window.history.pushState(null, null, "/posts");
        const allposts = new Posts();
        document.querySelector("#app").innerHTML = await allposts.getHTML();

        // Create bookmark link
        const toPost = document.createElement("a");
        toPost.setAttribute("href", `#p${id}`);
        toPost.className = "btn btn-info test-primary w-25"
        toPost.appendChild(document.createTextNode(""));
        const posts = document.getElementById("posts")
        posts?.appendChild(toPost);

        // Create a new click event
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });

        // Dispatch the click event on toPost
        toPost?.dispatchEvent(clickEvent);
    }, 100);
}