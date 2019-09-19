'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return any given value unchanged
 * 
 * @param {Any Data type} value: value to be returned
 * @return {Any Data type} value: value returned unchanged
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Determines the type of data of the given value
 * 
 * @param {Any Data type} value: value to be typed (and returned)
 * @return {String} value: Returns string of the datatype of input value
 */

function typeOf(value) {
    if (typeof value === "object") {
        if (Array.isArray(value) === true) {
            return 'array';
        } else if (value === null) {
            return "null";
        } else {
            return "object";
        }
    }
    return (typeof value);
}
module.exports.typeOf = typeOf;

/**
 * first: Gives the first <number> of values in an array.
 * 
 * @param {Array} array: the array of values to be searched through
 * @param {Number} number: the amount of the array's values, as a number, to search through
 * @return {Array} array: return the <number> of values from base array
 */

function first(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    }
    if (typeof number !== 'number') {
        return array[0];
    }
    if (number <= 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(0, number);
}
module.exports.first = first;

/**
 * last: Gives the last <number> of values in an array.
 * 
 * @param {Array} array: A given indexed collection of values.
 * @param {Number} number: The amount of values you wish to return
 * @return {Array} array: Returns an array of the <number> of values from base array
 */

function last(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    }
    if (typeof number !== 'number') {
        return array[array.length - 1];
    }
    if (number <= 0) {
        return [];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(number - 1);
}
module.exports.last = last;

/**
 * indexOf: Gives the index of <value> in <array>, or -1 if not in <array>
 * 
 * @param {Array} array: The given indexed collection to search through
 * @param {Any Data Type} value: The value that is being matched from <array>
 * @return {Number} number: The numerical index of <array> that matches <value>
 */

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Checks <array> for <value>, returning true if it does, or false if it doesn't.
 * 
 * @param {Array} array: the indexed collection to be searched through.
 * @param {Any Data type} value: The value to search for in <array>
 * @return {Boolean} boolean: Returns true or false depending on if the criteria were met or not
 */

function contains(array, value) {
    if (value === undefined) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;


/**
 * unique: Takes <array> and returns a new array with duplicate values removed.
 * 
 * @param {Array} array: The target array
 * @return {Array} array: The result array
 */

function unique(array) {
    const uniques = [];
    const collation = {};
    var prop;
    for (let i = 0; i < array.length; i++) {
        var prop = array[i];
        collation["key" + prop] = prop;
    }
    for (var key in collation) {
        uniques.push(collation[key]);
    }
    return uniques;
}
module.exports.unique = unique;

/**
 * filter: Runs <array> through a function and returns the passing values
 * 
 * @param {Array} array: The given array to run through
 * @param {Function} callback: The function to run through
 * @return {Array} array: The returned array of passed values
 */

function filter(array, callback){
  const final = [];
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array) === true) {
          final.push(array[i]);
      }
  }
  return final;
}
module.exports.filter = filter;

/**
 * reject: Runs <array> through a function and returns the failing values
 * 
 * @param {Array} array: The given array to run through
 * @param {Function} callback: The function to run through
 * @return {Array} array: The returned array of failing values
 */

function reject(array, callback) {
  const final = [];
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array) === false) {
          final.push(array[i]);
      }
  }
  return final;
}
module.exports.reject = reject;

/**
 * filter: Runs <array> through a function and returns the passing and failing values separated
 * 
 * @param {Array} array: The given array to run through
 * @param {Function} callback: The function to run through
 * @return {Array} array: The returned array of separated values
 */

function partition(array, callback) {
    const final = [];
    final.push([]);
    final.push([]);
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            final[0].push(array[i]);
        }
        if (callback(array[i], i, array) === false) {
            final[1].push(array[i]);
        }
    }
    return final;
}
module.exports.partition = partition;

/**
 * map: takes <collection> and returns an array of the values run through the function <callback>
 * 
 * @param {Array or Object} collection: The collection data to map through
 * @param {Function} callback: the function to map with
 * @return {Array} final: The array to be returned once the function has mapped.
 */

function map(collection, callback) {
    const final = [];
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            final.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            final.push(callback(collection[key], key, collection));
        }
    }
    return final;
}
module.exports.map = map;

/**
 * pluck: Takes an array of objects and returns an array of each object's <property>'s value
 * 
 * @param {Array} objarray: The array of objects to search through
 * @param {String} property: The key name within the objects to search with
 * @return {Array} final: The array of the values of <property>
 */

function pluck(objarray, property) {
    const final = [];
    for (let i = 0; i < objarray.length; i++) {
        final.push(objarray[i][property]);
    }
    return final;
}
module.exports.pluck = pluck;

/**
 * every: Runs through <collection> using a function and returns true if all values are true/thy
 * 
 * @param {Array or Object} collection: The array or object to run through
 * @param {Function} callback: The function to resolve the values to true or false
 * @return {Boolean} boolean: Determines true or false depending on the function and the requirements
 */

function every(collection, callback) {
    if (Array.isArray(collection) === true) {
        if (callback !== undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (callback(collection[i], i, collection) === false) {
                    return false;
                }
            }
        return true;
        } else if (callback === undefined) {
            for (let u = 0; u <collection.length; u++) {
                if (!!collection[u] === false) {
                    return false;
                }
            }
            return true;
        }
    }
    if (typeof collection === 'object') {
        if (callback !== undefined) {
            for (var key in collection) {
                if (callback(collection[key], key, collection) === false) {
                    return false;
                }
            }
        return true;
        } else if (callback === undefined) {
            for (var key in collection) {
                if (!!collection[key] === false) {
                    return false;
                }
            }
            return true;
        }
    }
}
module.exports.every = every;

/**
 * some: Runs through <collection> with a function, returning true if at least one value returns true
 * 
 * @param: {Object or Array} collection: The object or array to run through
 * @param: {Function} callback: The function to determine true or false
 * @return {Boolean} boolean: Determines true or false depending on the function and the requirements
 */

function some(collection, callback) {
        if (Array.isArray(collection) === true) {
        if (callback !== undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (callback(collection[i], i, collection) === true) {
                    return true;
                }
            }
        return false;
        } else if (callback === undefined) {
            for (let u = 0; u <collection.length; u++) {
                if (!!collection[u] === true) {
                    return true;
                }
            }
            return false;
        }
    }
    if (typeof collection === 'object') {
        if (callback !== undefined) {
            for (var key in collection) {
                if (callback(collection[key], key, collection) === true) {
                    return true;
                }
            }
        return false;
        } else if (callback === undefined) {
            for (var key in collection) {
                if (!!collection[key] === true) {
                    return true;
                }
            }
            return false;
        }
    }
}
module.exports.some = some;

/**
 * reduce: Takes an array, combines it all to one value, and returns the value
 * 
 * @param {Array} array: The array to be reduced
 * @param {Function} callback: The function that sets the criteria for reduction
 * @param {Number} seed: Sets the starting value for the function
 * @return {Number} seed: The final number, after <array> has been run through <callback>
 */

function reduce(array, callback, seed) {
    for (let i = 0; i < array.length; i++) {
        if (seed === undefined) {
            seed = array[0];
    } else {
        seed = callback(seed, array[i], i);
    }
}
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Takes any amount of objects and combines their keys into one returned object
 * 
 * @param {Object} ...object: The objects (up to an infinite amount) to be combined
 * @return {Object} line: The final object, with the keys of the other objects added and the preexisting keys reassigned
 */

function extend(...object) {
  var line = [...object];
  for (let i = 1; i < line.length; i++) {
    for (var key in line[i]) {
      line[0][key] = line[i][key];
    }
  }
  const final = object[0];
  return final;
}
module.exports.extend = extend;