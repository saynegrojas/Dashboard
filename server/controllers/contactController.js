import { Contacts } from '../models/index.js';

const getAllContacts = async (request, response) => {
  try {
    const contacts = await Contacts.getAll();
    response.status(200).json(contacts);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createContact = async (request, response) => {
  try {
    const { name, email, age, contact, address, city, zipCode } = request.body;
    const contactId = await Contacts.create({ name, email, age, contact, address, city, zipCode });
    response.status(201).json({ contactId });
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

export { getAllContacts, createContact };
