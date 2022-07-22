'use strict';

/**
 * features-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::features-list.features-list');
