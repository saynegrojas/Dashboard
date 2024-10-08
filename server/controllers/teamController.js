import { Team } from '../models/index.js';

const getAllTeam = async (request, response) => {
  try {
    const team = await Team.getAll();
    response.status(200).json(team);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createTeamMember = async (request, response) => {
  const { name, email, phone, access, age } = request.body;
  const postData = {
    name,
    email,
    phone,
    access,
    age: Number(age),
  };

  try {
    const result = await Team.create(postData);
    response.status(201).json({ result });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateTeamMember = async (request, response) => {
  try {
    const memberId = await Team.update(request.body);
    response.status(200).json({ memberId });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const deleteTeamMember = async (request, response) => {
  try {
    const memberId = await Team.delete(request.params);
    response.status(200).json({ memberId });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getTeamMemberById = async (request, response) => {
  try {
    const data = await Team.getById(request.query.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getAllItems = async (request, response) => {
  try {
    const items = await Team.getAllItems(request.query.name);
    response.status(200).json(items);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export {
  getAllTeam,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  getTeamMemberById,
  getAllItems,
};
