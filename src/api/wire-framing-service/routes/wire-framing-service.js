'use strict';

/**
 * wire-framing-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wire-framing-service.wire-framing-service');
