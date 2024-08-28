import Task from "../model/taskModel.js";
import ErrorHandler from "../middleware/error.js";

export const addNewTask = async (req, res, next) => {
  try {
    const { title, description, priority, status, dueDate } = req.body;

    if (!title || !description) {
      return next(new ErrorHandler("Please provide both title and description", 400));
    }

    const task = await Task.create({
      title,
      description,
      priority,
      status,
      dueDate
    });

    res.status(201).json({
      success: true,
      message: "Task added successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      tasks
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Task not found", 404));
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    let task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Task not found", 404));
    }

    task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    });

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};
