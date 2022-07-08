'use strict';

/**
 * php-development-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::php-development-service.php-development-service');
