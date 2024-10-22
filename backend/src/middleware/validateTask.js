const validateCreateTask = (req, res, next) => {
  if (!req.body.task_name) {
    return res.status(400).json({
      message: 'Task name is required',
    });
  }

  if (req.body.task_name.length < 3) {
    return res.status(400).json({
      message: 'Task name must be at least 3 characters long',
    });
  }

  if (req.body.task_name.length > 50) {
    return res.status(400).json({
      message: 'Task name must be at most 50 characters long',
    });
  }

  next();
};

const validatePatchTask = (req, res, next) => {
  if (typeof req.body.completed !== 'number') {
    return res.status(400).json({
      message: 'Completed must be a number',
    });
  }

  if (req.body.completed !== 0 && req.body.completed !== 1) {
    return res.status(400).json({
      message: 'Completed must be 0 or 1',
    });
  }

  next();
};

module.exports = {
  validateCreateTask,
  validatePatchTask,
};
