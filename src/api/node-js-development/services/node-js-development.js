'use strict';

/**
 * node-js-development service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::node-js-development.node-js-development');
