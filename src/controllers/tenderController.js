const fs = require('fs');
const path = require('path');

const tendersFilePath = path.join(__dirname, '..', 'data', 'tenders.json');

const readTendersFromFile = () => {
  try {
    const data = fs.readFileSync(tendersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading tenders file:', err);
    return [];
  }
};

const writeTendersToFile = (tenders) => {
  try {
    fs.writeFileSync(tendersFilePath, JSON.stringify(tenders, null, 2));
  } catch (err) {
    console.error('Error writing to tenders file:', err);
  }
};

// Get all tenders
exports.getAllTenders = (req, res) => {
  const tenders = readTendersFromFile();
  res.json(tenders);
};

// Create a new tender 
exports.createTender = (req, res) => {
  const { tenderName, tenderDescription, startTime, endTime, bufferTime } = req.body;

  if (!tenderName || !tenderDescription || !startTime || !endTime || !bufferTime) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const tenders = readTendersFromFile();

  const newTender = {
    id: tenders.length + 1,
    name: tenderName,
    description: tenderDescription,
    startTime,
    endTime,
    bufferTime,
    bids: 0,
    status: "Open",
  };

  tenders.push(newTender);
  writeTendersToFile(tenders);
  res.status(201).json({ message: "Tender created successfully", tender: newTender });
};
