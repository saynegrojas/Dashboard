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
  try {
    console.log(request.headers);
    const memberId = await Team.create(request.body);
    response.status(201).json({ memberId });
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
    const member = await Team.getById(request.query.id);
    response.status(200).json({ member });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export { getAllTeam, createTeamMember, updateTeamMember, deleteTeamMember, getTeamMemberById };
