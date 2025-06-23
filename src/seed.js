import sequelize from '../config/database.js';
import Blague from '../models/blague.js';

const blagues = [
  { question: "Quelle est la femelle du hamster ?", answer: "L`Amsterdam" },
  { question: "Que dit un oignon quand il se cogne ?", answer: "Aïe" },
  { question: "Quel est l'animal le plus heureux ?", answer: "Le hibou, parce que sa femme est chouette." },
  { question: "Pourquoi le football c'est rigolo ?", answer: "Parce que Thierry en rit" },
  { question: "Quel est le sport le plus fruité ?", answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
  { question: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" },
  { question: "Quel est le comble pour un marin ?", answer: "Avoir le nez qui coule" },
  { question: "Qu'est ce que les enfants usent le plus à l'école ?", answer: "Le professeur" },
  { question: "Quel est le sport le plus silencieux ?", answer: "Le para-chuuuut" },
  { question: "Quel est le comble pour un joueur de bowling ?", answer: "C`est de perdre la boule" }
];

const seed = async () => {
  try {
    await sequelize.sync();

    const count = await Blague.count();
    if (count === 0) {
      await Blague.bulkCreate(blagues);
      console.log(" Blagues ajoutées avec succès !");
    } else {
      console.log(" Les blagues existent déjà, rien à faire.");
    }

    process.exit();
  } catch (error) {
    console.error("Erreur lors de l'initialisation :", error);
    process.exit(1);
  }
};

seed();