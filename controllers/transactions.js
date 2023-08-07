// @description:  Get all transactions
// @route:   Get /api/v1/transactions
// @access public

exports.getTransactions = (req, res, next) => {
  res.send("Get transactions");
};

// @description:  Add a transaction
// @route:   POST /api/v1/transactions
// @access public

exports.addTransaction = (req, res, next) => {
  res.send("POST transactions");
};

// @description:delete a transaction
// @route:   Get /api/v1/transactions/:id
// @access public

exports.deleteTransaction = (req, res, next) => {
  res.send("Delete transactions");
};
