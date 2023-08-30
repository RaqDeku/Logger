require("colors");
const dayjs = require("dayjs");

module.exports = class Logger {
  info(message) {
    console.log(`Date: ${dayjs(new Date())}}`);
    console.log(`${message}`.cyan);
  }

  error(message) {
    console.log(`Date: ${dayjs(new Date())}}`);
    console.log(`${message}`.red);
  }

  warn(message) {
    console.log(`Date: ${dayjs(new Date())}}`);
    console.log(`${message}`.red.underline);
  }
};
