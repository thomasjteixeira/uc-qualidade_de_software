CREATE TABLE autores(
  id            INTEGER NOT NULL PRIMARY KEY,
  nome          TEXT    NOT NULL,
  nacionalidade TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO autores (nome, nacionalidade) 
VALUES  ("JRR Tolkien", "sul-africano"),
        ("Ursula LeGuin", "estadunidense"),
        ("Machado de Assis", "brasileira"),
        ("Isaac Asimov", "estadunidense"),
        ("Philip K. Dick", "estadunidense"),
        ("Arthur C. Clarke", "britânico"),
        ("H.G. Wells", "britânico"),
        ("Ray Bradbury", "estadunidense"),
        ("Robert A. Heinlein", "estadunidense"),
        ("Frank Herbert", "estadunidense");

CREATE TABLE editoras(
  id      INTEGER NOT NULL PRIMARY KEY,
  nome    TEXT    NOT NULL,
  cidade  TEXT    NOT NULL,
  email   TEXT    NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO editoras (nome, cidade, email) 
VALUES  ("Europa-América", "Lisboa", "e@e.com"),
        ("Morro Branco", "São Paulo", "m@m.com"),
        ("Aleph", "São Paulo", "al@al.com"),
        ("Ateliê", "São Paulo", "a@a.com"),
        ("HarperCollins", "Nova York", "hc@hc.com"),
        ("Penguin Random House", "Nova York", "prh@prh.com"),
        ("Houghton Mifflin Harcourt", "Boston", "hmh@hmh.com"),
        ("Macmillan Publishers", "Londres", "mp@mp.com"),
        ("Simon & Schuster", "Nova York", "ss@ss.com"),
        ("Hachette Livre", "Paris", "hl@hl.com");

CREATE TABLE livros(
  id          INTEGER NOT NULL PRIMARY KEY,
  titulo      TEXT    NOT NULL,
  paginas     INTEGER NOT NULL,
  editora_id  INTEGER NOT NULL,
  autor_id    INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (editora_id) REFERENCES editoras (id),
  FOREIGN KEY (autor_id) REFERENCES autores (id)
);

INSERT INTO livros (titulo, paginas, autor_id, editora_id)
VALUES  ("O Hobbit", 230, 1, 1),
        ("O Silmarillion", 400, 1, 1),
        ("O Feiticeiro de Terramar", 450, 2, 2),
        ("Os Despossuídos", 300, 2, 2),
        ("Memórias Póstumas de Brás Cubas", 150, 3, 3),
        ("Eu, Robô", 250, 4, 4),
        ("Do Androids Dream of Electric Sheep?", 210, 5, 5),
        ("2001: A Space Odyssey", 300, 6, 6),
        ("The War of the Worlds", 200, 7, 7),
        ("Fahrenheit 451", 230, 8, 8),
        ("Starship Troopers", 260, 9, 9),
        ("Dune", 412, 10, 10);
   