import { Invoices } from '../models/index.js';

const getAllInvoices = async (request, response) => {
  try {
    const invoices = await Invoices.getAll();
    response.status(200).json(invoices);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createInvoice = async (request, response) => {
  // TODO: fetch id of contact to pass as contact_id || just pass in contact_id from form
  try {
    const { name, email, phone, cost, city, zip_code, contact_id, date } = request.body;
    const invoiceId = await Invoices.create({
      name,
      email,
      phone,
      cost,
      city,
      zip_code,
      contact_id,
      date,
    });
    response.status(201).json({ invoiceId });
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

export { getAllInvoices, createInvoice };
