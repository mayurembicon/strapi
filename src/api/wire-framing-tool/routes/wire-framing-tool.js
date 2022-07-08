'use strict';

/**
 * wire-framing-tool router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wire-framing-tool.wire-framing-tool');
