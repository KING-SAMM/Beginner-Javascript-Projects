const express = require("express");
const path = require("path");
// const data = require("./frontend/static/data/data.js");

const app = express();

// Serve static routes using middleware
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/posts/api", async (req, res) => {

    try {
        const response = await fetch("http://blogx.local/api/post/read.php");
        const data = await response.json();

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