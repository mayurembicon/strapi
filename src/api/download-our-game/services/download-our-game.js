'use strict';

/**
 * download-our-game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-our-game.download-our-game');
