const logger = require(`./winston`);

logger.log(`silly`, `127.0.0.1 - there's no place like home`);
logger.log(`debug`, `127.0.0.1 - there's no place like home`, {some: `additional info`});
logger.log(`verbose`, `127.0.0.1 - there's no place like home`);
logger.log(`info`, `127.0.0.1 - there's no place like home`);
logger.log(`warn`, `127.0.0.1 - there's no place like home`);
logger.log(`error`, `127.0.0.1 - there's no place like home`);

logger.debug = (...params) => logger.log(`debug`, ...params);
logger.info(`127.0.0.1 - there's no place like home`);
logger.warn(`127.0.0.1 - there's no place like home`);
logger.error(`127.0.0.1 - there's no place like home`);
