import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const SQL_INIT_FILE = path.join(__dirname, 'init.sql');
const DB_PATH = path.join(__dirname, 'decisiontrace.db');

const database = new Database(DB_PATH, { verbose: console.log });

/**
 * Initialise la base de données en utilisant ton fichier SQL
 */
const initDb = () => {
    try {
        if (fs.existsSync(SQL_INIT_FILE)) {
            const schema = fs.readFileSync(SQL_INIT_FILE, 'utf8');
            database.exec(schema);
            console.log("Base de donnees initialisee avec succes avec le fichier SQL.");
        } else {
            console.error("Fichier d'initialisation SQL introuvable a :", SQL_INIT_FILE);
        }
    } catch (error) {
        console.error("Erreur lors de l'initialisation de la Base de donnees :", error);
    }
};

/** initialisation */
initDb();

export default database;