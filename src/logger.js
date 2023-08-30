require("colors");
const dayjs = require("dayjs");

class Logger {
  info(message) {
    console.log(`Date: ${dayjs(new Date())}`);
    console.log(`${message}`.cyan);
  }

  error(message) {
    console.log(`Date: ${dayjs(new Date())}`);
    console.log(`${message}`.red);
  }

  warn(message) {
    console.log(`Date: ${dayjs(new Date())}`);
    console.log(`${message}`.red.underline);
  }
}

module.exports = new Logger();
