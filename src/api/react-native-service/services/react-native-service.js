'use strict';

/**
 * react-native-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::react-native-service.react-native-service');
