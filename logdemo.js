const logger = require("./logger")

"use strict"
apicall = (name) => {
    logger.info(`api called by ${name}`);
}

apicall('john');