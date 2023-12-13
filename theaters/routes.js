import * as dao from "./dao.js";
// let currentUser = null;
function TheaterRoutes(app) {

    const createTheater = async (req, res) => {
        const theater = await dao.createTheater(req.body);
        res.json(theater);
      };
      app.post("/api/theaters", createTheater);


      const deleteTheater = async (req, res) => {
        const status = await dao.deleteTheater(req.params.theaterId);
        res.json(status);
    };
  
  const findAllTheaters = async (req, res) => {
    const theaters = await dao.findAllTheaters();
    res.json(theaters);
  };

  const findTheaterById = async (req, res) => {
    const theater = await dao.findTheaterById(req.params.theaterId);
    res.json(theater);
  };

  const updateTheater = async (req, res) => {
    const { theaterId } = req.params;
    const status = await dao.updateTheater(theaterId, req.body);
    res.json(status);
  };



  app.post("/api/theaters", createTheater);
  app.get("/api/theaters", findAllTheaters);
  app.get("/api/theaters/:theaterId", findTheaterById);
  app.put("/api/theaters/:theaterId", updateTheater);
  app.delete("/api/theaters/:theaterId", deleteTheater);
}
export default TheaterRoutes;