'use strict';

/**
 * we-can-do service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-can-do.we-can-do');
