'use strict';

/**
 * wire-framing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wire-framing.wire-framing');
