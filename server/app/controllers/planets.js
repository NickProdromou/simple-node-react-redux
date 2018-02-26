const planets = (req, res) => {
  const { db } = req.app.locals;
  const allPlanets = db.planets.find();

  res.status(200).json(allPlanets);
};

export default planets;
