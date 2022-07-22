'use strict';

/**
 *  php-development controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::php-development.php-development');
