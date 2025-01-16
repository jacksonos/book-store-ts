const validateRequestBody = (req, res, next) => {
  const { title, author, publishYear, description, price } = req.body;
  if (!title || !author || !publishYear || !description || !price) {
    console.log(title, author, publishYear, description, price);
    return res.status(400).json({
      error: 'Title, author, publishYear, description and price are required.',
    });
  }
  next();
};

export default validateRequestBody;
