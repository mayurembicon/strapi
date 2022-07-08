'use strict';

/**
 * data-visualization service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-visualization.data-visualization');
