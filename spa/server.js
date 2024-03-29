const express = require("express");
const path = require("path");
// const data = require("./frontend/static/data/data.js");

const app = express();

// Serve static routes using middleware
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/posts/api", (req, res) => {

    const data = [
        {
            id: 1,
            title: "JavaScript Objects",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at autem ullam quod reprehenderit, repellendus iste ducimus? Nesciunt quia enim nulla vel sit hic ea."
        },
        {
            id: 2,
            title: "How to use Object.entries",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium repudiandae, ad dolores voluptate illum amet laboriosam velit porro maxime architecto sed veniam iure pariatur nostrum minus culpa commodi fugiat iusto ut a quia. Nemo error laudantium excepturi laboriosam quisquam."
        },
        {
            id: 3,
            title: "Why Knowing Arrays and Objects is the Key to Becomming a Great Software Engineer",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam dolore quibusdam nesciunt ad quos neque consectetur iusto inventore ipsum."
        },
        {
            id: 4,
            title: "Data Structures and Algorithms for Dummies",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit maxime libero unde reprehenderit voluptatum nam, at repellat assumenda? Modi amet quia rem ullam earum atque debitis a error ut!"
        }
    ];
    try {
        if(typeof(data) !== 'string' && typeof(data) !== null) {
            console.log("SERVER DATA: ", data);
            res.statusCode = 201;
            res.statusMessage = "OK";
            res.send(JSON.stringify(data));
        } else {
            res.statusCode = 404;
            res.statusMessage = "Resource not found";
            res.send("Resource not found");
        }
    } catch (error) {
        console.log(error.message)
        res.statusCode = 404;
        res.statusMessage = "Resource not found";
        res.send(error.message);
    }

});

// For all routes return the index.html file
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server running... ");
})