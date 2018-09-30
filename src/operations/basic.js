/**
 * @class Operation
 * @author Carlos Linares <cilp2912@gmail.com>
 * @version 0.1.0
 */

/**
 * @constructor Operation
 * @description Add basic operations to a given redis client
 * @param {object} client - Redis client
 */
function Operation(client) {
    this.client = client;
}

/**
 * @description Find an item into a redis structure
 * @memberof Operation
 * @instance
 */
Operation.prototype.find = function() {
    
};

module.exports = Operation;

// define a in memory source to execute operations
// bind an object as source to redis
// to perfomr operations like find, map, consult, delete, etc