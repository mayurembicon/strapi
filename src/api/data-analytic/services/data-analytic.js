'use strict';

/**
 * data-analytic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-analytic.data-analytic');
