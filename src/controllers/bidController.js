const fs = require("fs");
const path = require("path");

const bidsFilePath = path.join(__dirname, "..", "data", "bids.json");

// Read bids from file
const readBidsFromFile = () => {
  try {
    const data = fs.readFileSync(bidsFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading bids file:", err);
    return [];
  }
};

// Write bids to file
const writeBidsToFile = (bids) => {
  try {
    fs.writeFileSync(bidsFilePath, JSON.stringify(bids, null, 2));
  } catch (err) {
    console.error("Error writing to bids file:", err);
  }
};


exports.getBidsForTender = (req, res) => {
  const tenderId = parseInt(req.params.tenderId);
  const bids = readBidsFromFile();

  // Filter bids for this tender
  let filteredBids = bids.filter((bid) => bid.tenderId === tenderId);

  // Sort bids in ascending order (Lowest bid first)
  filteredBids.sort((a, b) => a.bidAmount - b.bidAmount);

  res.json(filteredBids);
};

// Submit a new bid
exports.submitBid = (req, res) => {
  const { tenderId, companyName, bidAmount } = req.body;

  if (!tenderId || !companyName || !bidAmount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const bids = readBidsFromFile();

  const newBid = {
    id: bids.length + 1,
    tenderId,
    companyName,
    bidAmount,
    bidTime: new Date().toISOString() 
  };

  bids.push(newBid);
  writeBidsToFile(bids);

  res.status(201).json({ message: "Bid submitted successfully", bid: newBid });
};
