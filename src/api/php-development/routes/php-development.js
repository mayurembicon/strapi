'use strict';

/**
 * php-development router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::php-development.php-development');
