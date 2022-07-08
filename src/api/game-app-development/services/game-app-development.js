'use strict';

/**
 * game-app-development service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-app-development.game-app-development');
