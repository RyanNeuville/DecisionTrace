-- 1. Table des utilisateurs
CREATE TABLE users (
    id TEXT PRIMARY KEY, -- UUID généré par le backend
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT CHECK(role IN ('Admin', 'Manager')) DEFAULT 'Manager',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table des décisions
CREATE TABLE decisions (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    context TEXT, [cite: 20]
    status TEXT CHECK(status IN ('En cours', 'Validée', 'Annulée')) DEFAULT 'En cours',
    justification TEXT, [cite: 21]
    user_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 3. Table des options (choix possibles)
CREATE TABLE options (
    id TEXT PRIMARY KEY,
    decision_id TEXT NOT NULL, [cite: 20]
    name TEXT NOT NULL,
    description TEXT,
    estimated_cost REAL DEFAULT 0,
    FOREIGN KEY (decision_id) REFERENCES decisions(id) ON DELETE CASCADE
);

-- 4. Table des critères d'évaluation
CREATE TABLE criteria (
    id TEXT PRIMARY KEY,
    decision_id TEXT NOT NULL, [cite: 20]
    label TEXT NOT NULL,
    weight INTEGER DEFAULT 1,
    FOREIGN KEY (decision_id) REFERENCES decisions(id) ON DELETE CASCADE
);

-- 5. Table des évaluations (Score de chaque option par critère)
CREATE TABLE evaluations (
    id TEXT PRIMARY KEY,
    option_id TEXT NOT NULL, [cite: 20]
    criterion_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    comment TEXT,
    FOREIGN KEY (option_id) REFERENCES options(id) ON DELETE CASCADE,
    FOREIGN KEY (criterion_id) REFERENCES criteria(id) ON DELETE CASCADE
);

-- 6. Table des transactions financières
CREATE TABLE transactions (
    id TEXT PRIMARY KEY,
    type TEXT CHECK(type IN ('Entrée', 'Sortie')) NOT NULL, [cite: 24, 25]
    amount REAL NOT NULL,
    category TEXT NOT NULL, [cite: 25]
    decision_id TEXT, -- Lien optionnel pour la traçabilité stratégique 
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (decision_id) REFERENCES decisions(id) ON DELETE SET NULL
);