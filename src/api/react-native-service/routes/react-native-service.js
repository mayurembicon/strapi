'use strict';

/**
 * react-native-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::react-native-service.react-native-service');
