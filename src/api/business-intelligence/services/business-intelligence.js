'use strict';

/**
 * business-intelligence service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-intelligence.business-intelligence');
