'use strict';

/**
 * php-development service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::php-development.php-development');
