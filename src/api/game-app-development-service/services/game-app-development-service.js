'use strict';

/**
 * game-app-development-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-app-development-service.game-app-development-service');
