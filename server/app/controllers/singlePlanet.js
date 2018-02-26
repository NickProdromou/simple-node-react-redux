const singlePlanet = (req, res) => {
  const { id } = req.params;
  const { db } = req.app.locals;

  const selectedPlanet = db.planets.find({ id: parseInt(id) });

  res.status(200).json(selectedPlanet);
};

export default singlePlanet;
