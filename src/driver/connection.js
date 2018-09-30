/**
 * @class
 * @classdesc Manage Redis connections
 * @version 0.1.0
 * @author Carlos Linares <cilp2912@gmail.com>
 */

 /**@private */
const redis = require('redis');


/**
 * @method create
 * @param {string} uri - Uri to redise server
 * @description Create a new redis client
 * @private
 */
function create(uri) {
    return redis.createClient(uri);
}

/**
 * @constructor
 * @description Create a new redis client
 * @param {string} uri - Uri to redis server
 */
function Connection(uri) {
    this.connection = create(uri);
}

/**
 * @description Waits until all commands has been processes by redis, then
 * close the connection
 * @memberof Connection
 * @instance
 */
Connection.prototype.close = function() {
    this.connection.quit();
};

/**
 * @description Force the redis close connection
 * @memberof Connection
 * @instance
 */
Connection.prototype.forceClose = function() {
    this.connection.end(true);
};

module.exports = Connection;
