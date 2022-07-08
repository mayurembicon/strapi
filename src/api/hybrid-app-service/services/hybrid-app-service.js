'use strict';

/**
 * hybrid-app-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hybrid-app-service.hybrid-app-service');
