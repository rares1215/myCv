const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Use a suitable port

// Serve static assets from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle all other requests by serving your index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
