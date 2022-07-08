'use strict';

/**
 * php-development-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::php-development-service.php-development-service');
