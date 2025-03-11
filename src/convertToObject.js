'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // Split by semicolons, filter out empty lines, and trim whitespace
  sourceString.split(';').forEach((line) => {
    const [property, value] = line.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
