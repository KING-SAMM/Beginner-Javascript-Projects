// Application Routes 
const router = async () => {
    const routes = [
        { path: "/", view: () => { console.log("Viewing dashboard") }},
        { path: "/posts", view: () => { console.log("Viewing posts") }},
        { path: "/settings", view: () => { console.log("Viewing settings") }}
    ]

    // test each route for potentia match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    console.log(potentialMatches);
}

// Call the router function  w hen DOM loads
document.addEventListener("DOMContentLoaded", () => {
    router();
});