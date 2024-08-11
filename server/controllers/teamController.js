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

export { getAllTeam, createTeamMember };
