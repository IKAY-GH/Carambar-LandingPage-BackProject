import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Connexion à SQLite avec Sequelize (pas besoin de DB_NAME / USER / PASSWORD)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../carambar.sqlite', // nom du fichier BDD
  logging: false
});

export default sequelize;