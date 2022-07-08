'use strict';

/**
 * we-re-hiring service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-re-hiring.we-re-hiring');
