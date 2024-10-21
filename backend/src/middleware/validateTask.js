const validateTask = (req, res, next) => {
  if (!req.body.task) {
    return res.status(400).json({
      message: 'Task name is required',
    });
  }

  if (req.body.task.length < 3) {
    return res.status(400).json({
      message: 'Task name must be at least 3 characters long',
    });
  }

  if (req.body.task.length > 50) {
    return res.status(400).json({
      message: 'Task name must be at most 50 characters long',
    });
  }

  next();
};

module.exports = validateTask;
