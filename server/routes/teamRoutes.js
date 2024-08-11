import createRouter from '../utils/createRouter.js';
import { createTeamMember, getAllTeam } from '../controllers/teamController.js';

const teamRouter = createRouter();

teamRouter.get('/getAll', getAllTeam);
teamRouter.post('/create', createTeamMember);

export default teamRouter;
