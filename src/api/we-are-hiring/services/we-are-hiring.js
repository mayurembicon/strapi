'use strict';

/**
 * we-are-hiring service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-are-hiring.we-are-hiring');
