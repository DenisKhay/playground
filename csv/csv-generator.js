const convertToCsv = require('csv').stringify;

module.exports = (columns, dataArr, options = {delimiter: '|'}) => {
    if(!dataIsValid(columns, dataArr)) {
        throw new Error('Invalid data');
    }

    const csvOptions = {
        columns,
        ...options,
    };

    const dataArray = [
        arrToObject(columns),
        ...dataArr,
    ];

    return new Promise((resolve, reject) => {

        const handler = (err, data) => {
            if(err) {
                return reject(err);
            }
            return resolve(data);
        };

        convertToCsv(dataArray, csvOptions, handler);
    });
};

/**
 * @description
 * This ['some', 'bar'] to this: {some: 'some', bar: 'bar'}
 * @param arr
 * @returns {object}
 */
function arrToObject (arr) {
    return arr.reduce((object, item) => {
        object[item] = item;
        return object;
    }, {})
}

/**
 * @description
 * validates array @param dataArr - each of the object of the array should only contain
 * keys mentioned in @param onlyAllowedKeys
 * @param onlyAllowedKeys
 * @param dataArr
 * @returns {boolean}
 */
function dataIsValid(onlyAllowedKeys, dataArr) {
    return dataArr.every((data, i) => {
        const keys = Object.keys(data);
        return keys.every((key) => {
            const include = onlyAllowedKeys.includes(key);
            if (!include) {
                console.error(
                    '[dataIsValid] Invalid data.',
                    `\nData object at index: ${i} contains not allowed key: ${key}`,
                    `\nObject: ${JSON.stringify(data)}`,
                    `\nAllowed keys: ${JSON.stringify(onlyAllowedKeys)}`
                );
                return false;
            }
            return true;
        });
    })
}