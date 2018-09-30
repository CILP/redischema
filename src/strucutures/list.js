/** 
 * @class
 * @classdesc Class to manage Redis List in javascript
 * @version 0.1.0
 * @author Carlos Linares <cilp2912@gmail.com>
*/

const utils = require('../utils');

/**
 * @constructor List
 * @description Create a new List bindig to Redis list
 * @param {string} name - name is used as redis key for the list
 */
function List(name) {
    this.name = name;
    this.list = [];
}

/**
 * @memberof List
 * @description Add a new item into the list
 * @param {(object|string|number|boolean)} item - item to add to redis list
 * @instance
 */
List.prototype.add = function(item) {
    if (utils.isObject) {
        this.list.push(JSON.stringify(item));
    }

    this.list.push(item);
};

/**
 * @memberof List
 * @description Check if the given item exists in the list
 * @param {(object|string|number|boolean|null)} item - item to check
 * @instance
 * @return {boolean}
 */
List.prototype.exists = function(item) {
    if (utils.isObject(item)) {
        const itemString = JSON.stringify(item);
        return this.list.find(i => i === itemString) ? true : false;
    }
    return this.list.find(i => i === item) ? true : false;
};

/**
 * @memberof List
 * @description Find and return a given item
 * @param {(object|string|number|boolean)} item - item to find
 * @instance
 * @returns {(object|string|number|boolean|null)} returns the given item if the item 
 * is not in the list, then return null
 */
List.prototype.find = function(item) {
    if (utils.isObject(item)) {
        const itemString = JSON.stringify(item);
        const f = this.list.find(i => i === itemString);

        if (f) {
            return JSON.parse(f);
        } else {
            return null;
        }
    }
    return this.list.find(i => i === item);
};