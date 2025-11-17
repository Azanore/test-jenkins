const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON dans le body
app.use(express.json());

// GET / → retourne un message JSON
app.get("/", (req, res) => {
  res.json({ message: "Bonjour, c'est JSON maintenant !" });
});

// POST /echo → renvoie ce qu'on envoie dans le body
app.post("/echo", (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
