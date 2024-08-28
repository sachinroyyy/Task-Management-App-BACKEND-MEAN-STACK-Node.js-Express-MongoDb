import express from 'express';
import  { addNewTask, deleteTask, getAllTasks, updateTask } from '../controller/taskController.js';


const router = express.Router();

router.get('/getall', getAllTasks);
router.post('/addtask', addNewTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;





