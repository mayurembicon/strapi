'use strict';

/**
 * process-of-interview service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-of-interview.process-of-interview');
