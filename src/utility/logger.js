const prefixes = {
  debug: '\x1b[36mdebug\x1b[0m',
  info: '\x1b[32minfo\x1b[0m',
  warn: '\x1b[33mwarn\x1b[0m',
  error: '\x1b[31merror\x1b[0m',
};

class Logger {
  log(type, message) {
    console.info(prefixes[type], message);
  }

  debug(message) {
    return this.log('debug', message);
  }

  info(message) {
    return this.log('info', message);
  }

  warn(message) {
    return this.log('warn', message);
  }

  error(message) {
    return this.log('error', message);
  }
}

export const logger = new Logger();
