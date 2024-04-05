// const pino = require("pino");

// const levels = {
//   notice: 35,
// };

// const development = {
//   level: "trace",
//   // customLevels: levels,
//   formatters: {
//     level: (label) => {
//       return { level: label.toUpperCase() };
//     },
//   },
//   timestamp: pino.stdTimeFunctions.isoTime,
// };
// const fileTransport = pino.transport({
//   targets: [
//     {
//       level: "trace",
//       target: "pino/file",
//       options: {
//         destination: "./app.log",
//       },
//     },
//     {
//       level: "trace",
//       target: "pino-pretty",
//       options: {},
//     },
//   ],
// });
// module.exports = pino(development, fileTransport);

const winston = require("winston");
const { combine, timestamp, json, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
  level: "silly",
  // format: winston.format.json(),
  // format: winston.format.cli(),
  format: combine(
    // colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    // align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  // transports: [new winston.transports.Console()],
  transports: [
    new winston.transports.File({
      filename: "app.log",
    }),
  ],
});

module.exports = logger;
