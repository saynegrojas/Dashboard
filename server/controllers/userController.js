import { User } from '../models/index.js';

const getAllUsers = async (request, response) => {
  try {
    const users = await User.getAll();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createUser = async (request, response) => {
  try {
    const { username, password, email } = request.body;
    const userId = await User.create({ username, password, email });
    response.status(201).json({ userId });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export { getAllUsers, createUser };
