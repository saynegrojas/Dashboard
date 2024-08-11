import createRouter from '../utils/createRouter.js';
import { getAllUsers, createUser } from '../controllers/userController.js';

const userRouter = createRouter();

userRouter.get('/getAll', getAllUsers);
userRouter.post('/create', createUser);

export default userRouter;
