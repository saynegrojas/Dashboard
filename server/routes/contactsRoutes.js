import createRouter from '../utils/createRouter.js';
import { getAllContacts, createContact } from '../controllers/contactController.js';

const contactsRouter = createRouter();

contactsRouter.get('/getAll', getAllContacts);
contactsRouter.post('/create', createContact);

export default contactsRouter;
