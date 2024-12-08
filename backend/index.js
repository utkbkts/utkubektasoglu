import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import compression from "compression";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import {
  gracefulShutdown,
  unexpectedErrorHandler,
} from "./utils/error-index.js";

//ROUTER
import authRoutes from "./routes/user.router.js";
import postRoutes from "./routes/post.router.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(cookieParser()); // for parsing cookies
app.use(express.json({ limit: "50mb" })); // for parsing application/json
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//compress response
app.use(compression());
//CSRF
app.use(helmet());

//cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//router
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/post", postRoutes);

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

const server = app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

process.on("uncaughtException", (error) =>
  unexpectedErrorHandler(error, server)
);
process.on("unhandledRejection", (reason) =>
  unexpectedErrorHandler(reason, server)
);
process.on("SIGTERM", () => gracefulShutdown(server));
