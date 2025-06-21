import express from "express";
import blague from '../models/blague.js';

const router = express.Router();


// ➕ POST /blagues : ajouter une nouvelle blague
router.post("/", async (req, res) => {
  try {
    const { question, réponse } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const nouvelleBlague = await blague.create({ question, réponse });

    res.status(201).json(nouvelleBlague);
  } catch (error) {
    console.error("Erreur lors de la création de la blague :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Exemple de route
router.get("/", (req, res) => {
  res.json({ message: "Liste des blagues" });
});

export default router;