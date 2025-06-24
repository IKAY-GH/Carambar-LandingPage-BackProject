import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../carambar.sqlite', 
  logging: false
});

export default sequelize;