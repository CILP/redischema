/**
 * @module Utils
 * @description General utils functions
 * @author Carlos Linares <cilp2912@gmail.com>
 * @version 0.1.0
 */

/**
 * @function isObject
 * @param {*} obj - param to test as object
 * @description Check if the obj param is an object or not
 * @returns {boolean}
 * @example
 * isObject({})
 * true
 * 
 * isObject([])
 * false
 */
function isObject(obj) {
    return obj === Object(obj);
}

module.exports = {
    isObject
};
