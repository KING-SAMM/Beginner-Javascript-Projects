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

    // Get route that matches the url path
    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

    // Handle undefined routes - Default to dashboard
    if(!match) {
        match = {
            isMatch: true,
            route: routes[0]
        }
    }

    console.log(match.route.view());
}

// Control navigation using the history API
const navigateTo = url => {
    window.history.pushState(null, null, url);

    router();
}

// Navigate to route when browser 'forward' and 'back' buttons are cliked
window.addEventListener("popstate", router);

// Call the router function  when DOM loads
document.addEventListener("DOMContentLoaded", () => {

    // Navigate to route when nav link is clicked
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});