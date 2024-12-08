export const unexpectedErrorHandler = (error, server) => {
  console.error("Unexpected Error:", error);
  server.close(() => {
    console.log("Server closed due to an unexpected error.");
    process.exit(1);
  });
};

export const gracefulShutdown = (server) => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
};
