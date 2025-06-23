import express from "express";
import blague from '../models/blague.js';

const router = express.Router();


// ➕ POST /blagues : ajouter une nouvelle blague
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const nouvelleBlague = await blague.create({ question, answer });

    res.status(201).json(nouvelleBlague);
  } catch (error) {
    console.error("Erreur lors de la création de la blague :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /blagues : récupérer toutes les blagues
router.get("/", async (req, res) => {
  try {
    const blagues = await blague.findAll();
    res.json(blagues);
  } catch (error) {
    console.error("Erreur lors de la récupération des blagues :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blagueUnique = await blague.findByPk(req.params.id);
    if (blagueUnique) {
      res.json(blagueUnique);
    } else {
      res.status(404).json({ message: "Blague non trouvée" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la blague :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/random", async (req, res) => {
  try {
    const count = await blague.count();
    const randomIndex = Math.floor(Math.random() * count);
    const blagueAleatoire = await blague.findOne({ offset: randomIndex });
    res.json(blagueAleatoire);
  } catch (error) {
    console.error("Erreur lors de la récupération aléatoire :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("")

export default router;