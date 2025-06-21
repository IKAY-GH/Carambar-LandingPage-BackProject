import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const blague = sequelize.define('Blague', {

    question: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default blague;