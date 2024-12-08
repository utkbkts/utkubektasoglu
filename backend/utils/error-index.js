export const unexpectedErrorHandler = (error, server) => {
  server.close(() => {
    console.log("Server closed due to an unexpected error.");
    process.exit(1);
  });
};

export const gracefulShutdown = (server) => {
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
};
