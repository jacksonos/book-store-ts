const validateRequestBody = (req, res, next) => {
  const { title, author, publishYear, description } = req.body;
  if (!title || !author || !publishYear || !description) {
    console.log(title, author, publishYear, description);
    return res
      .status(400)
      .json({
        error: 'Title, author, publishYear, and description are required.',
      });
  }
  next();
};

export default validateRequestBody;
