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
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      ); // This will get the message from the errors object in the ValidatorError constructor in the console

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @description:delete a transaction
// @route:   Get /api/v1/transactions/:id
// @access public

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No such transaction found",
      });
    }

    await transaction.deleteOne(); // this will remove the transaction

    return res.status(200).json({
      success: true,
      message: "Transaction successfully removed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server error ",
    });
  }
};
