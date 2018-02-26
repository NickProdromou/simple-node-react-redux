const buy = (req, res) => {
  const { id } = req.params;
  const { db } = req.app.locals;

  const query = {
    id: parseInt(id)
  };

  const options = {
    multi: false,
    upsert: false
  };

  const newValue = {
    purchased: true
  };

  db.planets.update(query, newValue, options);

  const response = {
    text: `updated planet at id ${id}`
  };

  res.status(200).json(response);
};

export default buy;
