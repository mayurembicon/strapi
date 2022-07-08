'use strict';

/**
 * laravel-development service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::laravel-development.laravel-development');
