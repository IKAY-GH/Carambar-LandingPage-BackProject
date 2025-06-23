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
if (process.env.CLIENT_URL != null) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

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
const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});



