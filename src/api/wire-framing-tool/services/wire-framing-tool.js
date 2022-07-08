'use strict';

/**
 * wire-framing-tool service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wire-framing-tool.wire-framing-tool');
