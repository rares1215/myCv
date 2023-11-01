import { fileURLToPath } from "url";
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
