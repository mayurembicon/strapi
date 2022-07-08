'use strict';

/**
 *  php-development-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::php-development-service.php-development-service');
