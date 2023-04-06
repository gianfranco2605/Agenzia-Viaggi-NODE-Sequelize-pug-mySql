import  Sequelize  from "sequelize";
import db from "../config/db.js";

export const Testimoni = db.define('Testimoni', {
    
    nome: {
        type: Sequelize.STRING
        
    },
    mail: {
        type: Sequelize.STRING
    },
    messaggio: {
        type: Sequelize.STRING
    },
    
});