import createRouter from '../utils/createRouter.js';
import { getAllTransactions, createTransaction } from '../controllers/transactionsController.js';

const transactionsRouter = createRouter();

transactionsRouter.get('/getAll', getAllTransactions);
transactionsRouter.post('/create', createTransaction);

export default transactionsRouter;
