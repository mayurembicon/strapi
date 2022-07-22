'use strict';

/**
 * emoji-keyboard service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emoji-keyboard.emoji-keyboard');
