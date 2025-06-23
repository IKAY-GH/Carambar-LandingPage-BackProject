import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import blaguesRoutes from "../routes/blaguesRoutes.js";
import sequelize from '../config/database.js';
import blague from '../models/blague.js';  // à conserver si utile pour init
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// Charger les variables d’environnement
dotenv.config();

// Créer l’app express
const app = express();

// Middlewares
app.use(express.json());

// CORS dynamique (si variable définie)

  app.use(cors({ origin: 'https://ikay-gh.github.io' }));


// Routes


app.use('/api/v1/blagues', blaguesRoutes);

// Define a middleware function to log errors
const logErrors = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);

// Branchement de swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Synchroniser la BDD et lancer le serveur
const port = process.env.PORT;

const blagues = [
  { question: "Quelle est la femelle du hamster ?", answer: "L’Amsterdam" },
  { question: "Que dit un oignon quand il se cogne ?", answer: "Aïe" },
  { question: "Quel est l'animal le plus heureux ?", answer: "Le hibou, parce que sa femme est chouette." },
  { question: "Pourquoi le football c'est rigolo ?", answer: "Parce que Thierry en rit" },
  { question: "Quel est le sport le plus fruité ?", answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
  { question: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" },
  { question: "Quel est le comble pour un marin ?", answer: "Avoir le nez qui coule" },
  { question: "Qu'est ce que les enfants usent le plus à l'école ?", answer: "Le professeur" },
  { question: "Quel est le sport le plus silencieux ?", answer: "Le para-chuuuut" },
  { question: "Quel est le comble pour un joueur de bowling ?", answer: "C’est de perdre la boule" }
];

sequelize.sync().then(async () => {
  console.log('Database synced');

  const count = await blague.count();
  if (count === 0) {
    await blague.bulkCreate(blagues);
    console.log(" Blagues ajoutées automatiquement");
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});