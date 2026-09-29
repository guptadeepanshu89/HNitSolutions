require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const env = require("./config/env");
const { connectDatabase, disconnectDatabase } = require("./config/db");
const { apiLimiter } = require("./middleware/rateLimiter");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes");

env.validateEnv();

const app = express();

app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  })
);
app.use(morgan(env.isProd ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", apiLimiter, routes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: "HNitSolutions API",
      version: "1.0.0",
    },
  });
});

app.use(notFound);
app.use(errorHandler);

async function start() {
  await connectDatabase();
  const server = app.listen(env.port, () => {
    console.info(`HNitSolutions API listening on port ${env.port}`);
  });

  const shutdown = async () => {
    server.close(async () => {
      await disconnectDatabase();
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

start().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
