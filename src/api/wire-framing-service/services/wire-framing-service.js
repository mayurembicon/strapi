'use strict';

/**
 * wire-framing-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wire-framing-service.wire-framing-service');
