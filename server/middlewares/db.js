const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

const readJsonFile = async () => {
  try {
    const content = await fs.readFileSync(dbPath);
    return JSON.parse(content);
  } catch (error) {
    return {};
  }
};

const writeJson = async (db) => {
  const data = JSON.stringify(db);
  await fs.writeFileSync(dbPath, data);
};

const loadDb = async (req, res, next) => {
  // fs.mkdirSync(folderName, { recursive: true });
  let db = await readJsonFile();
  if (!db) {
    db = {};
  }
  if (!db.events) {
    db.events = [];
  }

  req.db = db;
  req.persistDb = async () => {
    await writeJson(req.db);
  };

  next();
};

module.exports = loadDb;
