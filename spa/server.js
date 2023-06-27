const express = require("express");
const path = require("path");

const app = express();

// Serve static routes using middleware
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// For all routes return the index.html file
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server running... ");
})