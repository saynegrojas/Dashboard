import createRouter from '../utils/createRouter.js';
import {
  createTeamMember,
  deleteTeamMember,
  getAllItems,
  getAllTeam,
  getTeamMemberById,
  updateTeamMember,
} from '../controllers/teamController.js';

const teamRouter = createRouter();

teamRouter.get('/getAll', getAllTeam);
teamRouter.post('/create', createTeamMember);
teamRouter.get('/getById', getTeamMemberById);
teamRouter.patch('/update', updateTeamMember);
teamRouter.delete('/delete', deleteTeamMember);
teamRouter.get('/getAllItems', getAllItems);

export default teamRouter;
