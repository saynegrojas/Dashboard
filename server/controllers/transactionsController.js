import { Transactions } from '../models/index.js';

const getAllTransactions = async (request, response) => {
  try {
    const invoices = await Transactions.getAll();
    response.status(200).json(invoices);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createTransaction = async (request, response) => {
  // TODO: fetch id of contact to pass as invoice_id || just pass in invoice_id from form
  try {
    const { email, cost, date, invoice_id, payment_method } = request.body;
    const transactionId = await Transactions.create({
      email,
      cost,
      date,
      invoice_id,
      payment_method,
    });
    response.status(201).json({ transactionId });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// const deleteUser = async (request, response) => {
//   try {
//     const { id } = request.params;
//     const userId = await User.delete(id);
//     response.status(200).json({ userId });
//   } catch (error) {
//     response.status(500).json({ error: error.message });
//   }
// };

export { getAllTransactions, createTransaction };
