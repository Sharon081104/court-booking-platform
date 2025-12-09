import Court from "../models/Court.js";

export const getCourts = async (_, res) => {
  res.json(await Court.find());
};

export const addCourt = async (req, res) => {
  const court = await Court.create(req.body);
  res.json(court);
};
