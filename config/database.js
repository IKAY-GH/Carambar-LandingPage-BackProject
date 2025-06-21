import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Connexion à SQLite avec Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  dialect: 'sqlite',
  storage: './carambar.sqlite', // nom du fichier BDD à créer
  logging: false, // optionnel : supprime les logs SQL dans la console
}
);

export default sequelize;