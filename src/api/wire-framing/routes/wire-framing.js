'use strict';

/**
 * wire-framing router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wire-framing.wire-framing');
