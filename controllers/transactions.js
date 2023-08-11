const Transaction = require("../models/Transaction"); // This allows us to use mongodb commands such as find, delete or update

// @description:  Get all transactions
// @route:   Get /api/v1/transactions
// @access public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find(); // Get all transactions
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return (
      res,
      send(500).json({
        success: false,
        error: "Server error",
      })
    );
  }
};

// @description:  Add a transaction
// @route:   POST /api/v1/transactions
// @access public

exports.addTransaction = async (req, res, next) => {
  res.send("POST transactions");
};

// @description:delete a transaction
// @route:   Get /api/v1/transactions/:id
// @access public

exports.deleteTransaction = async (req, res, next) => {
  res.send("Delete transactions");
};
