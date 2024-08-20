import createRouter from '../utils/createRouter.js';
import { getAllInvoices, createInvoice } from '../controllers/invoicesController.js';

const invoicesRouter = createRouter();

invoicesRouter.get('/getAll', getAllInvoices);
invoicesRouter.post('/create', createInvoice);

export default invoicesRouter;
