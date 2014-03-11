/**
 * Define constants
 *
 * @method define
 * @param {String} name constant name
 * @param {String || Number} value constant value
 */

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}


//---------------------------------------------------------------------
// HTTP Status
//---------------------------------------------------------------------
define('SERVER_PORT', 8000);

