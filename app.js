import express from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import FollowsRoutes from "./follows/routes.js";
import TheaterRoutes from "./theaters/routes.js";
import ReviewsRoutes from './reviews/routes.js';
import session from "express-session";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
  
app.use(express.json());
UserRoutes(app);
FollowsRoutes(app);
TheaterRoutes(app);
ReviewsRoutes(app);
app.listen(process.env.PORT || 4000);
