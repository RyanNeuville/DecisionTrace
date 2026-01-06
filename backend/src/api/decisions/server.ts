import express, { response } from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import database from "../../database";

const app = express();
app.use(cors());
app.use(express.json());

/** ROUTES POUR LE MODULE 1 : GESTION DES DECISIONS */

/** 1. Creer une decision */
app.post(
  "/api/decisions",
  (request: express.Request, response: express.Response) => {
    const {
      title,
      context,
      justification,
      user_id,
    }: {
      title: string;
      context: string;
      justification: string;
      user_id: string;
    } = request.body;
    const id: string = uuidv4();

    try {
      const stmt = database.prepare(
        "INSERT INTO decisions (id, title, context, justification, user_id) VALUES (?, ?, ?, ?, ?)"
      );
      stmt.run(id, title, context, justification, user_id);

      response.status(201).json({
        id,
        title,
        context,
        justification,
        user_id,
        message: "Decision creee avec succes",
      });
    } catch (error) {
      response.status(500).json({
        error: "Erreur lors de la création de la décision",
        message: error,
      });
    }
  }
);
