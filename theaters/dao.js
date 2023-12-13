import model from "./model.js";
export const createTheater = (theater) => model.create(theater);
export const findAllTheaters = () => model.find();
export const findTheaterById = (theaterId) => model.findById(theaterId);
export const findTheaterByName = (name) =>
  model.findOne({ name: name });
export const findTheaterByAddress = (address) =>
  model.findOne({address: address});
export const updateTheater = (theaterId, theater) =>
  model.updateOne({ _id: theaterId }, { $set: theater });
export const deleteUser = (theaterId) => model.deleteOne({ _id: theaterId });